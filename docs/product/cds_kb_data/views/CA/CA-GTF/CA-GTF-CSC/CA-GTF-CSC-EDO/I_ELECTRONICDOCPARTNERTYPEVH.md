---
name: I_ELECTRONICDOCPARTNERTYPEVH
description: "Electronicdocpartnertypevh"
app_component: CA-GTF-CSC-EDO
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
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - value-help
  - partner
  - component:CA-GTF-CSC-EDO
  - lob:Cross-Application Components
---
# I_ELECTRONICDOCPARTNERTYPEVH

**Electronicdocpartnertypevh**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO` |
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
| `ElectronicDocBPType` | ✓ | |  | `cast(domvalue_l as edoc_partner_type)` |  |  |
| `ElectronicDocBPTypeDesc` |  | |  | `cast( dd07t.ddtext as val_text preserving type )` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Electronic Document Partner Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #META
}
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey:'ElectronicDocBPType'
@ObjectModel.modelingPattern:  #VALUE_HELP_PROVIDER
@Search.searchable:true
define view entity I_ElectronicDocPartnerTypeVH
  as select from dd07t
{
      @ObjectModel: { text.element:  [ 'ElectronicDocBPTypeDesc' ]}
  key cast(domvalue_l as edoc_partner_type)            as ElectronicDocBPType,

      @Semantics.text: true
      @Search: { defaultSearchElement: true, ranking: #HIGH }
      @Search.fuzzinessThreshold: 0.8
      @EndUserText.label: 'Partner Type Description'
      cast( dd07t.ddtext as val_text preserving type ) as ElectronicDocBPTypeDesc
}
where
      domname    = 'EDOC_PARTNER_TYPE'
  and as4local   = 'A'
  and ddlanguage = $session.system_language
```
