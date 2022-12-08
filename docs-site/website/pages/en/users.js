/*
  Licensed to the Apache Software Foundation (ASF) under one
  or more contributor license agreements.  See the NOTICE file
  distributed with this work for additional information
  regarding copyright ownership.  The ASF licenses this file
  to you under the Apache License, Version 2.0 (the
  "License"); you may not use this file except in compliance
  with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing,
  software distributed under the License is distributed on an
  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, either express or implied.  See the License for the
  specific language governing permissions and limitations
  under the License.
*/

const React = require("react")

const CompLibrary = require("../../core/CompLibrary.js")

const Container = CompLibrary.Container

class Users extends React.Component {
  render() {
    const { config: siteConfig } = this.props
    if ((siteConfig.users || []).length === 0) {
      return null
    }

    // editURL points to data/users.js list of users
    const editUrl = `${siteConfig.docsRepoUrl}/edit/master/docs-site/website/data/users.js`
    const showcase = siteConfig.users.map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ))

    return (
      <div className="mainContainer">
        <Container padding={["bottom"]}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Users of Apache SINGA</h1>
              <p>
                Apache SINGA is used by many projects, especially in healthcare
                and finance
              </p>
            </div>
            <div className="logos">{showcase}</div>
            <p>Is your project using Apache SINGA?</p>
            <a href={editUrl} className="button">
              Add your logo with a Pull Request
            </a>
          </div>
        </Container>
      </div>
    )
  }
}

Users.title = "Users"

module.exports = Users
