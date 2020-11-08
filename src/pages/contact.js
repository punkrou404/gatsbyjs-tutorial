import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Contact() {
    return (
        <Layout>
            <Header headerText="Contact" />
            <div>
                <Header headerText="I'd love to talk! Email me at the address below" />
                <p>
                    <a href="mailto:me@example.com">me@example.com</a>
                </p>
            </div>
        </Layout>
    )
}