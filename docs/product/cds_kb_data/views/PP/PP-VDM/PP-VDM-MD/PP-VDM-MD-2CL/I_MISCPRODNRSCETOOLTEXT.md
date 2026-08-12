---
name: I_MISCPRODNRSCETOOLTEXT
description: "Miscprodnrscetooltext"
app_component: PP-VDM-MD-2CL
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
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - text-view
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_MISCPRODNRSCETOOLTEXT

**Miscprodnrscetooltext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
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
| `ProductionResourceType` | ✓ | |  |  |  |  |
| `ProductionResourceInternalID` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `MiscProductionResourceToolDesc` |  | |  | `ProductionResourceText` |  |  |
| `MiscPRTAuthorizationGroup` |  | | `_MiscPRTByInternalKey` | `MiscPRTAuthorizationGroup` |  |  |
| `_ProductionResourceType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionResourceType` | `I_ProductionResourceType` | [1..1] |
| `_Language` | `I_Language` | [1..1] |
| `_MiscPRTByInternalKey` | `I_MiscPRTByInternalKey` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPMISCPRTTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true 
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ProductionResourceInternalID'
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #M, dataClass: #MASTER }
@Search.searchable: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Miscellaneous PRT - Text'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_MiscProdnRsceToolText
  as select from I_ProductionResourceText as text

  association [1..1] to I_ProductionResourceType as _ProductionResourceType on  $projection.ProductionResourceType = _ProductionResourceType.ProductionResourceType
  association [1..1] to I_Language               as _Language               on  $projection.Language = _Language.Language
  association [1..1] to I_MiscPRTByInternalKey   as _MiscPRTByInternalKey   on  $projection.ProductionResourceType       = _MiscPRTByInternalKey.ProductionResourceType
                                                                            and $projection.ProductionResourceInternalID = _MiscPRTByInternalKey.ProductionResourceInternalID
{
      @ObjectModel.foreignKey.association: '_ProductionResourceType'
  key text.ProductionResourceType,
      @ObjectModel.text.element: 'MiscProductionResourceToolDesc'
  key text.ProductionResourceInternalID,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key text.Language               as Language,

      // Text
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      text.ProductionResourceText as MiscProductionResourceToolDesc,

      --for DCLS
      _MiscPRTByInternalKey.MiscPRTAuthorizationGroup,

      // Associations
      _ProductionResourceType,
      _Language
}
where
  text.ProductionResourceType = 'FH';
```
