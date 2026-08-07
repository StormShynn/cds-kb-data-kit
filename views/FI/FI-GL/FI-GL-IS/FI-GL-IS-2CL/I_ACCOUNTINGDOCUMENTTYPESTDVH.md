---
name: I_ACCOUNTINGDOCUMENTTYPESTDVH
description: "Journal Entry Type"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACCOUNTINGDOCUMENTTYPESTDVH')/$value
semantic_en: "Journal Entry Type"
semantic_vi: "Journal Entry Type — CDS view giao diện dựa trên I_AccountingDocumentType."
keywords:
  - "journal"
  - "entry"
  - "type"
  - "accounting"
  - "document"
  - "authorization"
  - "group"
tags:
  - FI
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_ACCOUNTINGDOCUMENTTYPESTDVH

**Journal Entry Type**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACCOUNTINGDOCUMENTTYPESTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingDocumentType` | ✓ | |  |  | `CHAR(2)` | Journal Entry Type |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACCOUNTINGDOCUMENTTYPESTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACCOUNTINGDOCUMENTTYPESTDVH')/$value)*

```abap
//GENERATED:001:GlBfhyFV7jUzaDT}MP9DVm
@AbapCatalog.sqlViewName: 'IFIADT__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'AccountingDocumentType'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#SEARCHABLE_ENTITY,#VALUE_HELP_PROVIDER]
@EndUserText.label: 'Journal Entry Type'
define view I_AccountingDocumentTypeStdVH as select from I_AccountingDocumentType {
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key AccountingDocumentType,

  _Text,
  @Consumption.hidden: true
  AuthorizationGroup
}
```
