---
name: I_WASTECMPLRQVERSDIMN
description: "Compliance Requirement Dimension"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTECMPLRQVERSDIMN')/$value
semantic_en: "Compliance Requirement Dimension"
semantic_vi: "Compliance Requirement Dimension — CDS view giao diện dựa trên I_WasteCmplRqVersGrouped."
keywords:
  - "compliance"
  - "requirement"
  - "dimension"
  - "cmpl"
  - "vers"
tags:
  - EHS
  - bo:salesorganization
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
---
# I_WASTECMPLRQVERSDIMN

**Compliance Requirement Dimension**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTECMPLRQVERSDIMN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplRqVers` | ✓ | |  |  | `CHAR(40)` | Compliance Requirement Version ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTECMPLRQVERSDIMN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTECMPLRQVERSDIMN')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IWANALYTCRD'
@AbapCatalog.compiler.compareFilter: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.representativeKey: 'CmplRqVers'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Compliance Requirement Dimension'
define view I_WasteCmplRqVersDimn as select from I_WasteCmplRqVersGrouped 
{
  key CmplRqVers
}
```
