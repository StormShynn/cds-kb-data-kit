---
name: I_SRVCDOCESCALATION
description: "Srvcdocescalation"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCESCALATION

**Srvcdocescalation**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceEscalationLevel` | ✓ | |  | `domvalue_l` |  |  |
| `_SrvcDocEscalationText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcDocEscalationText` | `I_SrvcDocEscalationText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Escalation Level of Service Transaction'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVESCSTAT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@ObjectModel: {
   representativeKey: 'ServiceEscalationLevel',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #X,
     sizeCategory:   #S
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE]
}
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.internalName:#LOCAL
define view I_SrvcDocEscalation
  as select from dd07l
  association [1..*] to I_SrvcDocEscalationText as _SrvcDocEscalationText on $projection.ServiceEscalationLevel = _SrvcDocEscalationText.ServiceEscalationLevel

{
      @ObjectModel.text.association: '_SrvcDocEscalationText'
  key domvalue_l as ServiceEscalationLevel,

      _SrvcDocEscalationText
}
where
      domname  = 'CRM_SRQM_ESCALATION'
  and as4local = 'A'
```
