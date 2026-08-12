---
name: I_CABILLGDOCINVCGSTATUS
description: "Cabillgdocinvcgstatus"
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
# I_CABILLGDOCINVCGSTATUS

**Cabillgdocinvcgstatus**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgDocumentInvcgStatus` | ✓ | |  | `cast( dd07l.domvalue_l as invstatus_kk )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_CABillgDocInvcgStatusText` | | ✓ | | | | |

## Source Code

```abap
@Search.searchable: true
@Consumption.ranked: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Fakturierungsstatus eines Abr.bel.'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgDocumentInvcgStatus',
  sapObjectNodeType.name: 'ContrAcctgBillgDocInvcgStatus',
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
  },
  resultSet.sizeCategory: #XS,
  dataCategory: #VALUE_HELP
}
@VDM.viewType: #BASIC
define root view entity I_CABillgDocInvcgStatus
  as select from dd07l
  composition [0..*] of I_CABillgDocInvcgStatusText as _CABillgDocInvcgStatusText
{
      @ObjectModel.text.association: '_CABillgDocInvcgStatusText'
  key cast( dd07l.domvalue_l as invstatus_kk ) as CABillgDocumentInvcgStatus,
  
      @Consumption.hidden: true
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
      dd07l.domvalue_l                         as DomainValue,
      
      _CABillgDocInvcgStatusText
}
where
      dd07l.domname  = 'INVSTATUS_KK'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
