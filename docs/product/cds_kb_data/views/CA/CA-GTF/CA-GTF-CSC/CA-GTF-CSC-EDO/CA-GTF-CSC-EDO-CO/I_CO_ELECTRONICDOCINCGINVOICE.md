---
name: I_CO_ELECTRONICDOCINCGINVOICE
description: "CO Electronicdocincginvoice"
app_component: CA-GTF-CSC-EDO-CO
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-CO
  - lob:Cross-Application Components
---
# I_CO_ELECTRONICDOCINCGINVOICE

**CO Electronicdocincginvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-CO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  |  |  |  |
| `CO_ElectronicDocOfclInvcNmbr` |  | |  |  |  |  |
| `CO_ElectronicDocSupplierName` |  | |  |  |  |  |
| `CO_ElectronicDocPurOrdByCust` |  | |  |  |  |  |
| `CO_ElectronicDocInvcTotAmount` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `CO_ElectronicDocIsAccepted` |  | |  |  |  |  |
| `CO_EDocSignatureBinary` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@ObjectModel: {
  usageType:{
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #TRANSACTIONAL
  },
  supportedCapabilities: [#SQL_DATA_SOURCE, 
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Colombia Incoming Invoice'

define view entity I_CO_ElectronicDocIncgInvoice
  as select from R_CO_ElectronicDocIncgInvoice
{

  key ElectronicDocUUID,
      CO_ElectronicDocOfclInvcNmbr,
      CO_ElectronicDocSupplierName,
      CO_ElectronicDocPurOrdByCust,
      @Semantics.amount.currencyCode: 'Currency'
      CO_ElectronicDocInvcTotAmount,
      Currency,
      CO_ElectronicDocIsAccepted,
      CO_EDocSignatureBinary
      
}
```
