---
name: I_SRVCDOCAPPOINTMENTTYPE
description: "Appointment Type for Service Transaction"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCDOCAPPOINTMENTTYPE')/$value
semantic_en: "Appointment Type for Service Transaction"
semantic_vi: "Appointment Type for Service Transaction — CDS view giao diện dựa trên scappttype."
keywords:
  - "appointment"
  - "type"
  - "for"
  - "service"
  - "transaction"
  - "srvc"
tags:
  - CRM
  - bo:purchaseorder
  - component:CRM-S4-REP-RFW
  - CRM-S4
  - CRM-S4-REP
  - CRM-S4-REP-RFW
  - interface-view
  - transaction
---
# I_SRVCDOCAPPOINTMENTTYPE

**Appointment Type for Service Transaction**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCDOCAPPOINTMENTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SrvcDocAppointmentType` | ✓ | |  | `appt_type` | `CHAR(12)` | Date Type |
| `_SrvcDocAppointmentTypeTxt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcDocAppointmentTypeTxt` | `I_SrvcDocAppointmentTypeText` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCDOCAPPOINTMENTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCDOCAPPOINTMENTTYPE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@EndUserText.label: 'Appointment Type for Service Transaction'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.viewType: #BASIC

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: 'SrvcDocAppointmentType'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@Search.searchable: true

@Consumption.ranked: true
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
define view entity I_SrvcDocAppointmentType  
 as select from scappttype
 association [1..*] to I_SrvcDocAppointmentTypeText as _SrvcDocAppointmentTypeTxt on  $projection.SrvcDocAppointmentType = _SrvcDocAppointmentTypeTxt.SrvcDocAppointmentType
{
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8
  @ObjectModel.text.association: '_SrvcDocAppointmentTypeTxt'
  key appt_type as SrvcDocAppointmentType,
  
  _SrvcDocAppointmentTypeTxt
}
```
