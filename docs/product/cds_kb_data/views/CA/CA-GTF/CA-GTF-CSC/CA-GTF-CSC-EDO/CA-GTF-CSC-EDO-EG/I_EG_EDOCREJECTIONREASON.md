---
name: I_EG_EDOCREJECTIONREASON
description: "EG Edocrejectionreason"
app_component: CA-GTF-CSC-EDO-EG
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
  - component:CA-GTF-CSC-EDO-EG
  - lob:Cross-Application Components
---
# I_EG_EDOCREJECTIONREASON

**EG Edocrejectionreason**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-EG` |
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
| `EG_EDocRejectionCode` | ✓ | |  |  | `CHAR(2)` | eDocument Egypt: Rejection Code |
| `EG_EDocLanguage` |  | |  |  | `LANG(1)` | Language Key |
| `EG_EDocRjcnReasonDesc` |  | |  |  | `CHAR(255)` | eDocument Egypt: Rejection Reason Description |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'eDocument Egypt Rejection Reason'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@ObjectModel:{
 usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MASTER

},
modelingPattern: #NONE,
supportedCapabilities: [   #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                            #UI_PROVIDER_PROJECTION_SOURCE
                           ]
                           }
@Search.searchable: true
define view entity I_EG_EDocRejectionReason
  as select from R_EG_EDocRejectionReason
{
      @Search: {
      defaultSearchElement: true,
      ranking: #HIGH,
      fuzzinessThreshold: 0.8 }
      @ObjectModel: { text.element:  [ 'EG_EDocRjcnReasonDesc' ]}
  key EG_EDocRejectionCode,
      @Semantics.language
      @UI.hidden:true
      EG_EDocLanguage,
      @Semantics.text: true
      @Search: {
       defaultSearchElement: true,
       ranking: #LOW,
       fuzzinessThreshold: 0.8 }
      EG_EDocRjcnReasonDesc

}
```
