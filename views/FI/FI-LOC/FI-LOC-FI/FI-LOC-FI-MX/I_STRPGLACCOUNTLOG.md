---
name: I_STRPGLACCOUNTLOG
description: "Strpgl AccountLOG"
app_component: FI-LOC-FI-MX
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - gl-account
  - component:FI-LOC-FI-MX
  - lob:Finance
---
# I_STRPGLACCOUNTLOG

**Strpgl AccountLOG**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-MX` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StatryRptgEntity` | ✓ | |  | `statryrptgentity` |  |  |
| `StatryRptCategory` | ✓ | |  | `statryrptcategory` |  |  |
| `StatryRptRunID` | ✓ | |  | `statryrptrunid` |  |  |
| `CompanyCode` | ✓ | |  | `companycode` |  |  |
| `GLAccount` | ✓ | |  | `glaccount` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISRGLACCTLOG'
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true  
@EndUserText.label: 'GL Accounts Log for Statutory Reporting'
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #CUBE }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #XL 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.dataClass: #MIXED
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]

define view I_StRpGLAccountLog as select from glaccts_rep_itm 

{
  key glaccts_rep_itm.statryrptgentity  as StatryRptgEntity,
  key glaccts_rep_itm.statryrptcategory as StatryRptCategory,
  key glaccts_rep_itm.statryrptrunid    as StatryRptRunID,
  
  @Consumption.valueHelpDefinition: [{ entity :{ name : 'I_CompanyCodeVH', element: 'CompanyCode'} }]
  @ObjectModel.text.element: [ 'CompanyCode' ]  
  @Semantics.text:true
  key glaccts_rep_itm.companycode       as CompanyCode,
  
  key glaccts_rep_itm.glaccount         as GLAccount  
}
```
