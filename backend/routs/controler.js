const pool = require("../db");

const jwt = require("jsonwebtoken")

const userRegister = async (req, res) => {
    res.json({ Message: "Users welcome" })
}

const CreateUser = async (req, res) => {
    const { name, email, password, skills, job_title, about, qualification, career_break, experince } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO "user_details" (name, email, password, skills, job_title, about, qualification, career_break,experince) VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9)',
            [name, email, password, skills, job_title, about, qualification, career_break, experince]
        );
        return res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}
const CreateEmployer = async (req, res) => {
    const { username, email, password, companyName, description } = req.body;
    console.log("CJKNSJNCKNC", req.body);

    try {
        const result = await pool.query(
            'INSERT INTO "employer_details" (username, email, password, company_name, description) VALUES ($1, $2, $3, $4, $5)',
            [username, email, password, companyName, description]
        );


        return res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}


const OneData = async (req, res) => {
    const { id } = req.body;
    try {
        const result = await pool.query('SELECT * FROM user WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('User not found');
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}




const login = async (req, res) => {

    const { email, password } = req.body;
    console.log(email, password);

    const result = await pool.query('SELECT * FROM "employer_details" WHERE email = $1', [email]);

    console.log(result.rows[0]);

    if (!result) {
        res.status(500).send('Passowrd wrong');
    } else {
        let accesstoken = jwt.sign({
            user: {
                username: result.rows[0].firstname,
                email: result.rows[0].email,
                id: result.rows[0].id
            }
        }, "abinesh", { expiresIn: "1hr" })

        return res.json({ AccessToken: accesstoken });

    }
}

const userlogin = async (req, res) => {

    const { email, password } = req.body;
    console.log(email, password);

    const result = await pool.query('SELECT * FROM "user_details" WHERE email = $1', [email]);

    console.log(result?.rows[0]);

    if (result?.rows[0] == undefined) {
        res.status(500).send('Passowrd wrong');
    } else if (result?.rows[0]?.id) {
        let accesstoken = jwt.sign({
            user: {
                username: result?.rows[0]?.firstname,
                email: result?.rows[0]?.email,
                id: result?.rows[0]?.id
            }
        }, "abinesh", { expiresIn: "1hr" })

        return res.json({ AccessToken: accesstoken });

    }
}




const searchUser = async (req, res) => {
    const { search } = req.body;

    let query = 'SELECT * FROM user_details';
    let queryParams = [];

    if (search) {
        query += ' WHERE';
        queryParams.push(`%${search}%`);
        query += ` (CAST(name AS TEXT) ILIKE $${queryParams.length} OR CAST(skills AS TEXT) ILIKE $${queryParams.length} OR CAST(job_title AS TEXT) ILIKE $${queryParams.length})`;
    }

    try {
        const result = await pool.query(query, queryParams);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}
const searchJobs = async (req, res) => {
    const { search } = req.body;

    let query = 'SELECT * FROM postjob';
    let queryParams = [];

    if (search) {
        query += ' WHERE';
        queryParams.push(`%${search}%`);
        query += ` (CAST(jobtitle AS TEXT) ILIKE $${queryParams.length} OR CAST(skills AS TEXT) ILIKE $${queryParams.length} OR CAST(description AS TEXT) ILIKE $${queryParams.length} OR CAST(qualification AS TEXT) ILIKE $${queryParams.length})`;
    }

    try {
        const result = await pool.query(query, queryParams);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}

const formatArray = (arr) => {
    return `{${arr.map(item => `"${item}"`).join(',')}}`;
};

const postJob = async (req, res) => {
    const { jobTitle, skills, description, salary, qualification } = req.body;

    try {
        let skillsArray = skills;
        if (typeof skills === 'string') {
            skillsArray = skills.split(',').map(skill => skill.trim());
        }

        const formattedSkills = formatArray(skillsArray);

        const result = await pool.query(
            'INSERT INTO postjob (jobTitle, skills, description, salary, qualification) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [jobTitle, formattedSkills, description, salary, qualification]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }

}



const validation = async (req, res, next) => {
    let token;

    let authToken = req.headers.Authorization || req.headers.authorization

    if (authToken) {
        token = authToken.split(" ")[1];

        console.log("CSHScsss", token);

        jwt.verify(token, "abinesh", (err, ddecode) => {
            if (err) {
                res.status(401);
                throw new Error("User is not Authorized")

            } else {
                req.user = ddecode.user;
                next()
            }
        })

    }
}
module.exports = { userlogin, searchJobs, postJob, searchUser, OneData, CreateEmployer, userRegister, CreateUser, login, validation }