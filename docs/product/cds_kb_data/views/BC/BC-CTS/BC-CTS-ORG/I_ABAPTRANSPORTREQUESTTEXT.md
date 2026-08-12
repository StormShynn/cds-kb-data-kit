---
name: I_ABAPTRANSPORTREQUESTTEXT
description: "Abaptransportrequesttext"
app_component: BC-CTS-ORG
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-CTS
  - BC-CTS-ORG
  - interface-view
  - text-view
  - transport
  - text
  - component:BC-CTS-ORG
  - lob:Basis Components
---
# I_ABAPTRANSPORTREQUESTTEXT

**Abaptransportrequesttext**

| Property | Value |
|---|---|
| App Component | `BC-CTS-ORG` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportRequestID` | ✓ | |  |  | `CHAR(20)` | Request/Task |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `TransportRequestDescription` |  | |  | `cast( substring( RelevantText, 2, 60 ) as as4text preserving type )` | `CHAR(60)` | Short Description of Repository Objects |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'ABAP Transport Request Text Description'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC

@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #L,
  dataClass: #MIXED
}

@ObjectModel.dataCategory:#TEXT
@ObjectModel.representativeKey: 'TransportRequestID'

define view entity I_ABAPTransportRequestText
  as select from CTS_TR_TEXT_HLP2

  //association [0..1] to I_RequestsHeader as _TransportRequestHeader on $projection.TransportRequestID = _TransportRequestHeader.TransportRequestID
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      // @ObjectModel.foreignKey.association: '_TransportRequestHeader'
  key TransportRequestID,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @Semantics.text: true
      cast( substring( RelevantText, 2, 60 ) as as4text preserving type ) as TransportRequestDescription,
      // @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT] -- should no more necessary
      // _TransportRequestHeader,
      _Language
}
```
