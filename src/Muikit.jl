
module Muikit
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/button.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "muikit",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-button.js",
    external_url = "https://unpkg.com/muikit@0.0.1/muikit/async-button.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-button.js.map",
    external_url = "https://unpkg.com/muikit@0.0.1/muikit/async-button.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "muikit.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "muikit.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
