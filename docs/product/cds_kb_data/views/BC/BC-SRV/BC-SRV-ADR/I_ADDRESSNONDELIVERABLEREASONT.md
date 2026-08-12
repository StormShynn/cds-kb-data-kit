---
name: I_ADDRESSNONDELIVERABLEREASONT
description: "Addressnondeliverablereasont"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
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
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - address
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRESSNONDELIVERABLEREASONT

**Addressnondeliverablereasont**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `AddressNonDeliverableReason` | ✓ | |  | `undeliver` | `CHAR(4)` | Not Deliverable Flag |
| `AddressNonDeliverableReasonTxt` |  | |  | `undeli_tx` | `CHAR(30)` | Reason for Non-Delivery (Text) |
| `AddrNonDeliverableReasonDesc` |  | |  | `undeli_dc` | `CHAR(70)` | Reason for Non-Delivery (Text) |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'AddressNonDeliverableReason'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IBPADNONDLRSNT'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT]
@EndUserText.label: 'Address Non-Deliverable Reason - Text'
define view entity I_AddressNonDeliverableReasonT
  as select from tsad12t
{
      @Semantics.language: true
  key langu     as Language,
  key undeliver as AddressNonDeliverableReason,
      @Semantics.text: true
      @EndUserText.label: 'Non-Deliverable Reason Text'
      @EndUserText.quickInfo: 'Non-Deliverable Reason Text'
      undeli_tx as AddressNonDeliverableReasonTxt,
      @EndUserText.label: 'Non-Deliverable Reason Description'
      @EndUserText.quickInfo: 'Non-Deliverable Reason Description'
      undeli_dc as AddrNonDeliverableReasonDesc
}
```
