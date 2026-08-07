---
name: I_DOCUMENTINFORECORDAUTHZNGRPT
description: Documentinforecordauthzngrpt
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
  - document
  - component:CA-DMS
  - lob:Cross-Application Components
---
# I_DOCUMENTINFORECORDAUTHZNGRPT

**Documentinforecordauthzngrpt**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |
| `AuthorizationGroup` | ✓ | |  | `brgru` |
| `DocInfoRecdAuthznObject` | ✓ | |  | `brobj` |
| `AuthorizationGroupName` |  | |  | `bezei` |
| `_Language` | | ✓ | | |
| `_AuthGroup` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_AuthGroup` | `I_DocumentInfoRecordAuthznGrp` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCAUTHGRPT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'DocInfoRecdAuthznObject'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #ORGANIZATIONAL }
@EndUserText.label: 'Document Info Record Authzn Group - Text'
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
define view I_DocumentInfoRecordAuthznGrpT
  as select from tbrgt

  association [0..1] to I_Language                    as _Language  on $projection.Language = _Language.Language

  association [0..1] to I_DocumentInfoRecordAuthznGrp as _AuthGroup on $projection.AuthorizationGroup = _AuthGroup.AuthorizationGroup

{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras           as Language,

      @ObjectModel.foreignKey.association: '_AuthGroup'
      @EndUserText.quickInfo: 'Authorization Group'
  key brgru           as AuthorizationGroup,

      @ObjectModel.text.element: 'AuthorizationGroupName'
  key brobj           as DocInfoRecdAuthznObject,

      @Semantics.text: true
      @EndUserText.label:'Authorization Group Description'
      bezei           as AuthorizationGroupName,

      // Associations
      _Language,
      _AuthGroup
      
}
```
