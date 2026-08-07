---
name: I_FINANCIALSTATEMENTHIERT
description: "Financialstatementhiert"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_FINANCIALSTATEMENTHIERT

**Financialstatementhiert**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialStatementHierarchy` | ✓ | |  | `hryid_42` |  |  |
| `ValidityEndDate` | ✓ | |  | `hryvalto` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ValidityStartDate` |  | |  | `hryvalfrom` |  |  |
| `FinancialStmntHierarchyName` |  | |  | `hrytxt` |  |  |
| `_Language` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Hierarchy` | `I_FinancialStatementHier` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFISTMTHERT'
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Financial Statement Hierarchy - Text'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'FinancialStatementHierarchy'
@ObjectModel.dataCategory: #TEXT
@Consumption.filter.businessDate.at: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name:'FinancialStatementHierText'

define view I_FinancialStatementHierT
  as select from hrrp_dirt_n
  association [0..1] to I_Language               as _Language  on  $projection.Language = _Language.Language
  association [0..1] to I_FinancialStatementHier as _Hierarchy on  $projection.FinancialStatementHierarchy = _Hierarchy.FinancialStatementHierarchy
                                                               and $projection.ValidityEndDate             = _Hierarchy.ValidityEndDate // Hierarchy directory and hierarchy nodes have the same time slice

{
  key  hrrp_dirt_n.hryid_42 as FinancialStatementHierarchy,
       @Semantics.businessDate.to: true
  key  hryvalto             as ValidityEndDate,
       @ObjectModel.foreignKey.association: '_Language'
       @Semantics.language: true
  key  spras                as Language,
       @Semantics.businessDate.from: true
       hryvalfrom           as ValidityStartDate,
       @Semantics.text: true
       @EndUserText.label: 'Financial Statement Description'
       hrytxt               as FinancialStmntHierarchyName,
       _Language,
       _Hierarchy
}
where
      hrrp_dirt_n.hier_catg =    'FSVN'
```
