---
name: I_DOCINFORECDDOCNMBRSTDVH
description: "Docinforecddocnmbrstdvh"
app_component: CA-DMS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-DMS
  - interface-view
  - value-help
  - standard-value-help
  - component:CA-DMS
  - lob:Cross-Application Components
---
# I_DOCINFORECDDOCNMBRSTDVH

**Docinforecddocnmbrstdvh**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocumentInfoRecordDocType` | ✓ | |  |  | `CHAR(3)` | Document Type |
| `DocumentInfoRecordDocNumber` | ✓ | |  |  | `CHAR(25)` | Document Number |
| `_DocType` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:003:GlBfhyJl7kU}e1}23kDJAW
@AbapCatalog.sqlViewName: 'ICVDOCNMBR_VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'DocumentInfoRecordDocNumber'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle: {
  contract: {
    type:#PUBLIC_LOCAL_API
  }
}

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]

@Search.searchable: true
@EndUserText.label: 'Document Info Record Document Number'
define view I_DocInfoRecdDocNmbrStdVH as select distinct from I_DocumentInfoRecordDocNumber {
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @ObjectModel.foreignKey.association: '_DocType'
  key DocumentInfoRecordDocType,
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  key DocumentInfoRecordDocNumber,

  @Consumption.hidden: true
  _DocType
}
```
