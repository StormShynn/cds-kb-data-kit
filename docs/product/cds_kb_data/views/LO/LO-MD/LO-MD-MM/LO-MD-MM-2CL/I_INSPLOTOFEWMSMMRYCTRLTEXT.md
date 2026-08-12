---
name: I_INSPLOTOFEWMSMMRYCTRLTEXT
description: "Insplotofewmsmmryctrltext"
app_component: LO-MD-MM-2CL
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
  - LO-MD
  - LO-MD-MM
  - interface-view
  - text-view
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_INSPLOTOFEWMSMMRYCTRLTEXT

**Insplotofewmsmmryctrltext**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
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
| `InspLotOfEWMSummaryControl` | ✓ | |  | `cast (substring ( domvalue_l, 1, 1) as qlot_control_origin_17 preserving type )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `InspLotOfEWMSummaryControlText` |  | |  | `cast( ddtext as qlot_control_origin_17_text preserving type )` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IILEWMSMRYCTRLT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType: {
    dataClass: #META,
    sizeCategory: #S,
    serviceQuality: #A
}
@ObjectModel.representativeKey: 'InspLotOfEWMSummaryControl'
@EndUserText.label: 'Insp Lot Summary for Wrhs-Mngd Stock - Txt'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:
  [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_InspLotOfEWMSmmryCtrlText
  as select from dd07t
{
  key cast (substring ( domvalue_l, 1, 1) as qlot_control_origin_17 preserving type ) as InspLotOfEWMSummaryControl,
      @Semantics.language
  key ddlanguage                                                                      as Language,
      @Semantics.text
      @Search : { defaultSearchElement: true,
                        fuzzinessThreshold: 0.8 }
      cast( ddtext as qlot_control_origin_17_text preserving type )                   as InspLotOfEWMSummaryControlText

}
where
      domname  = '/SCWM/DO_QDOC_CNTRL'
  and as4local = 'A';
```
