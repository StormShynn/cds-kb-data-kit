---
name: I_DOCINFORECDDOCTYPESTDVH
description: Docinforecddoctypestdvh
app_component: CA-DMS
software_component: SAPSCORE
release_state: released
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
# I_DOCINFORECDDOCTYPESTDVH

**Docinforecddoctypestdvh**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `DocumentInfoRecordDocType` | ✓ | |  |  |
| `_Text` | | ✓ | | |

## Source Code

```abap
//GENERATED:003:GlBfhyJl7kU}e1}23kDJAW
@AbapCatalog.sqlViewName: 'ICVDOCTYPE_VH'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@ObjectModel.dataCategory: #VALUE_HELP
@Search.searchable: true
@Consumption.ranked:true
@ObjectModel.representativeKey: 'DocumentInfoRecordDocType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle: {
  contract: {
    type:#PUBLIC_LOCAL_API
  },
  status: #DEPRECATED,
  successor: 'I_DOCINFORECDDOCUMENTTYPE'
}
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@EndUserText.label: 'Document Info Record Document Type'
define view I_DocInfoRecdDocTypeStdVH
  as select from I_DocumentInfoRecordDocType
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
  key DocumentInfoRecordDocType,

      _Text
}
```
