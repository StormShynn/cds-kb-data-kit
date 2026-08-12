---
name: I_DOCUMENTINFORECORDAUTHZNGRPT
description: "Documentinforecordauthzngrpt"
app_component: CA-DMS
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `AuthorizationGroup` | ✓ | |  | `brgru` |  |  |
| `DocInfoRecdAuthznObject` | ✓ | |  | `brobj` |  |  |
| `AuthorizationGroupName` |  | |  | `bezei` |  |  |
| `_Language` | | ✓ | | | | |
| `_AuthGroup` | | ✓ | | | | |

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
