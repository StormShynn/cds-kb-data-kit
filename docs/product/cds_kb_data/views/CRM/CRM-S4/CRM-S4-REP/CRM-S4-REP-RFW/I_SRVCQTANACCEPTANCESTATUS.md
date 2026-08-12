---
name: I_SRVCQTANACCEPTANCESTATUS
description: "Srvcqtanacceptancestatus"
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
  - status
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCQTANACCEPTANCESTATUS

**Srvcqtanacceptancestatus**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SrvcDocIsAccepted` | ✓ | |  | `domvalue_l` |  |  |
| `_SrvcQtanAcceptanceStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcQtanAcceptanceStatusText` | `I_SrvcQtanAcceptanceStatusText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Status of Service Quotation'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVQNSTAT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   representativeKey: 'SrvcDocIsAccepted',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #X,
     sizeCategory:   #S
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
}
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
define view I_SrvcQtanAcceptanceStatus
  as select from dd07l
  association [1..*] to I_SrvcQtanAcceptanceStatusText as _SrvcQtanAcceptanceStatusText on $projection.SrvcDocIsAccepted = _SrvcQtanAcceptanceStatusText.SrvcDocIsAccepted

{
      @ObjectModel.text.association: '_SrvcQtanAcceptanceStatusText'
  key domvalue_l as SrvcDocIsAccepted,

      _SrvcQtanAcceptanceStatusText
}
where
      domname  = 'CRMS4_STAT_ACCEPTED'
  and as4local = 'A'
```
