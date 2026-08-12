---
name: I_ADDLCOMPANYCODEINFORMATION
description: "ADDLCompany CodeINFORMATION"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - company-code
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:CompanyCode
---
# I_ADDLCOMPANYCODEINFORMATION

**ADDLCompany CodeINFORMATION**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `CompanyCodeParameterType` | ✓ | |  | `party` |  |  |
| `CompanyCodeParameterValue` |  | |  | `paval` |  |  |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Additional Specifications for Company Code'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ICOMPCODEADDLINF'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel: { usageType.sizeCategory: #S,
                usageType.dataClass:  #MASTER,
                usageType.serviceQuality: #A,
                supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION ],
                modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'CompanyCodeParameterType' }   
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter:true 
@AbapCatalog.preserveKey:true



define view I_AddlCompanyCodeInformation as select from t001z
 
association [0..1] to I_CompanyCode       as _CompanyCode        on $projection.CompanyCode = _CompanyCode.CompanyCode

{
    @ObjectModel.foreignKey.association: '_CompanyCode'
    key t001z.bukrs as CompanyCode,
    key t001z.party as CompanyCodeParameterType,
        t001z.paval as CompanyCodeParameterValue,
        
    _CompanyCode
}
```
