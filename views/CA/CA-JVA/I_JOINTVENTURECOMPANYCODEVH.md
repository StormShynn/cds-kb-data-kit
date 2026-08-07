---
name: I_JOINTVENTURECOMPANYCODEVH
description: "JOINTVENTURECompany CodeVH"
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - interface-view
  - value-help
  - company-code
  - component:CA-JVA
  - lob:Cross-Application Components
  - bo:CompanyCode
---
# I_JOINTVENTURECOMPANYCODEVH

**JOINTVENTURECompany CodeVH**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast(bukrs as fis_bukrs preserving type)` |  |  |
| `CompanyCodeName` |  | |  | `butxt` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVCOMPCODEVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION }
@Analytics.internalName:#LOCAL 
@VDM.viewType: #BASIC
@ObjectModel:{
   dataCategory: #VALUE_HELP,
   supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,#VALUE_HELP_PROVIDER,#ANALYTICAL_DIMENSION ],
   representativeKey: 'CompanyCode',
   usageType: { sizeCategory: #S,
                dataClass: #ORGANIZATIONAL,
                serviceQuality: #A
                } }
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@EndUserText.label: 'JVA Company Code'

define view I_JointVentureCompanyCodeVH
  as select from t001
{
      @ObjectModel.text.element: ['CompanyCodeName']
  key cast(bukrs      as fis_bukrs preserving type) as CompanyCode,
      @Semantics.text: true
      butxt                                         as CompanyCodeName
}
where
  xjvaa = 'X'
```
