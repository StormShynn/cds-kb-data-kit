---
name: I_CABILLGREQSTATUS
description: "Cabillgreqstatus"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_CABILLGREQSTATUS

**Cabillgreqstatus**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgReqStatus` | ✓ | |  | `cast( substring( dd07l.domvalue_l,1,1 ) as billreqstatus_kk preserving type )` |  |  |
| `_CABillgReqStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgReqStatusText` | `I_CABillgReqStatusText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Status des Abrechnungsauftrags (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgReqStatus',
  sapObjectNodeType.name: 'ContrAcctgBillingRequestStatus',
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
define view entity I_CABillgReqStatus
  as select from dd07l

  association [0..*] to I_CABillgReqStatusText as _CABillgReqStatusText on $projection.CABillgReqStatus = _CABillgReqStatusText.CABillgReqStatus
{
  @ObjectModel.text.association: '_CABillgReqStatusText'
  key cast( substring( dd07l.domvalue_l,1,1 ) as billreqstatus_kk preserving type ) as CABillgReqStatus,
      _CABillgReqStatusText
}
where
      domname  = 'BILLREQSTATUS_KK'
  and as4local = 'A'
```
