---
name: I_WRNTYCLAIMCTRLGITEMTYPETEXT
description: "Wrntyclaimctrlgitemtypetext"
app_component: LO-WTY-FIO
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
  - LO
  - LO-WTY
  - interface-view
  - text-view
  - text
  - item-level
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYCLAIMCTRLGITEMTYPETEXT

**Wrntyclaimctrlgitemtypetext**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
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
| `WrntyControllingItemType` | ✓ | |  | `cast( domvalue_l as wty_poskt )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `WrntyControllingItemTypeText` |  | |  | `ddtext` |  |  |
| `_WrntyClaimCtrlgItemType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WrntyClaimCtrlgItemType` | `I_WrntyClmControllingItemType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warranty Claim Ctrlg Item Type - Text'
@ObjectModel:{
    representativeKey: 'WrntyControllingItemType',
    usageType:{
        dataClass       : #ORGANIZATIONAL,
        serviceQuality  : #A,
        sizeCategory    : #S
        }
}
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IWRNTYITEMTYPTXT'
//@VDM.viewType: #BASIC *******Modernization Task********
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
define view entity I_WrntyClaimCtrlgItemTypeText 
as select from dd07t
association [1..1] to I_WrntyClmControllingItemType as _WrntyClaimCtrlgItemType on $projection.WrntyControllingItemType = _WrntyClaimCtrlgItemType.WrntyControllingItemType
association [0..1] to I_Language           as _Language           on $projection.Language = _Language.Language
 {
 @ObjectModel.foreignKey.association: '_WrntyClaimCtrlgItemType'
 @ObjectModel.text.element: ['WrntyControllingItemTypeText']
  key cast( domvalue_l as wty_poskt ) as WrntyControllingItemType,
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true
  key ddlanguage as Language,
  @Semantics.text: true
  ddtext as WrntyControllingItemTypeText,
  _Language,
  _WrntyClaimCtrlgItemType
} where dd07t.domname = 'WTY_POSKT'
    and dd07t.as4local = 'A'
    and dd07t.as4vers  = '0000'
```
