---
name: I_SRVCDOCRELFORBILLGSTS
description: Srvcdocrelforbillgsts
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCRELFORBILLGSTS

**Srvcdocrelforbillgsts**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceDocIsReleasedForBilling` | `domvalue_l` |
| `_SrvcDocIsRelForBillgStsText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcDocIsRelForBillgStsText` | `I_SrvcDocRelForBillgStsText` | [1..*] |

## Source Code

```abap
@AbapCatalog:{
sqlViewName: 'ISERVDOCRELBLSTS',
compiler.compareFilter: true,
preserveKey:true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Release for Billing Status of Srvc Trans'

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: 'ServiceDocIsReleasedForBilling'
@ObjectModel.sapObjectNodeType.name: 'SrvcTransReldForBillingStatus'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, 
#CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
  }
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcDocRelForBillgSts
  as select from dd07l
  association [1..*] to I_SrvcDocRelForBillgStsText as _SrvcDocIsRelForBillgStsText on $projection.ServiceDocIsReleasedForBilling = _SrvcDocIsRelForBillgStsText.ServiceDocIsReleasedForBilling
{

      @ObjectModel.text.association: '_SrvcDocIsRelForBillgStsText'
  key domvalue_l as ServiceDocIsReleasedForBilling,

      _SrvcDocIsRelForBillgStsText
}
where
      domname  = 'CRMS4_STAT_FOR_BILLING'
  and as4local = 'A'
```
