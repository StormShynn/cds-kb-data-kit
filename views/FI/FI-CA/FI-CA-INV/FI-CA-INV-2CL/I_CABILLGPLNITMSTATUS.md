---
name: I_CABILLGPLNITMSTATUS
description: Cabillgplnitmstatus
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
# I_CABILLGPLNITMSTATUS

**Cabillgplnitmstatus**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CABillgPlnItemStatus` | `cast( substring(dd07l.domvalue_l, 1, 1) as bipitem_status_kk preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CABillgPlnItmStatusText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Status der Abrechnungsplanposition'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgPlnItemStatus',
  sapObjectNodeType.name: 'ContrAcctgBillgPlanItemStatus',
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC
define view entity I_CABillgPlnItmStatus
  as select from dd07l
  association [0..*] to I_CABillgPlnItmStatusText as _Text on $projection.CABillgPlnItemStatus = _Text.CABillgPlnItemStatus
{
      @ObjectModel.text.association: '_Text'
  key cast( substring(dd07l.domvalue_l, 1, 1) as bipitem_status_kk preserving type ) as CABillgPlnItemStatus,

      _Text
}

where
      dd07l.domname  = 'BIPITEM_STATUS_KK'
  and dd07l.as4local = 'A';
```
