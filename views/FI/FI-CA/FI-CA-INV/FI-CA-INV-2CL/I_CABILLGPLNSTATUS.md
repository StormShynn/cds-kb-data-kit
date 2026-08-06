---
name: I_CABILLGPLNSTATUS
description: Cabillgplnstatus
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - status
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGPLNSTATUS

**Cabillgplnstatus**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CABillgPlnStatus` | `cast ( substring( dd07l.domvalue_l,1,1 ) as bip_status_kk preserving type)` |
| `_CABillgPlnStatusText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgPlnStatusText` | `I_CABillgPlnStatusText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Status des Abrechnungsplans'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgPlnStatus',
  sapObjectNodeType.name: 'ContrAcctgBillingPlanStatus',
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC
define view entity I_CABillgPlnStatus
  as select from dd07l

  association [1..*] to I_CABillgPlnStatusText as _CABillgPlnStatusText on $projection.CABillgPlnStatus = _CABillgPlnStatusText.CABillgPlnStatus
{
      @ObjectModel.text.association: '_CABillgPlnStatusText'
  key cast ( substring( dd07l.domvalue_l,1,1 ) as bip_status_kk preserving type) as CABillgPlnStatus,
      _CABillgPlnStatusText
}
where
      domname  = 'BIP_STATUS_KK'
  and as4local = 'A'
```
