---
name: I_DOCUMENTINFORECORDAUTHZNGRP
description: "Documentinforecordauthzngrp"
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
  - document
  - component:CA-DMS
  - lob:Cross-Application Components
---
# I_DOCUMENTINFORECORDAUTHZNGRP

**Documentinforecordauthzngrp**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AuthorizationGroup` | ✓ | |  | `brgru` |  |  |
| `DocInfoRecdAuthznObject` |  | |  | `brobj` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DocumentInfoRecordAuthznGrpT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCAUTHGRP'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'AuthorizationGroup'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #ORGANIZATIONAL }
@EndUserText.label: 'Document Info Record Authorization Group'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@Search.searchable: true
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER , #ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view I_DocumentInfoRecordAuthznGrp
  as select from tbrg

  association [0..*] to I_DocumentInfoRecordAuthznGrpT as _Text on  $projection.AuthorizationGroup      = _Text.AuthorizationGroup
                                                                and $projection.DocInfoRecdAuthznObject = _Text.DocInfoRecdAuthznObject

{

      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
      @EndUserText.quickInfo: 'Authorization Group'
  key tbrg.brgru as AuthorizationGroup,

      @Consumption.hidden: true
      tbrg.brobj as DocInfoRecdAuthznObject,

      // Associations
      _Text

}
where
  tbrg.brobj = 'C_DRAW_BGR'
```
