---
name: I_CABILLGPLNTP_2
description: Cabillgplntp 2
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
  - transactional-processing
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGPLNTP_2

**Cabillgplntp 2**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgPlnNumber` | ✓ | |  |  |  |  |
| `CABillgPlnCategory` |  | |  |  |  |  |
| `CABillgPlnType` |  | |  |  |  |  |
| `CABillgPlnStatus` |  | |  |  |  |  |
| `CABillgPlnStartDate` |  | |  |  |  |  |
| `CABillgPlnEndDate` |  | |  |  |  |  |
| `CABillgPlnLastRequestDate` |  | |  |  |  |  |
| `CABillgPlnNextRequestDate` |  | |  |  |  |  |
| `CABillgPlnDescription` |  | |  |  |  |  |
| `CABillgPlnExternalReference` |  | |  |  |  |  |
| `LogicalSystem` |  | |  |  |  |  |
| `CAApplicationArea` |  | |  |  |  |  |
| `BusinessPartner` |  | |  |  |  |  |
| `ContractAccount` |  | |  |  |  |  |
| `CAInvcgMasterDataType` |  | |  |  |  |  |
| `CAContract` |  | |  |  |  |  |
| `CAProviderContractItemUUID` |  | |  |  |  |  |
| `CASubApplication` |  | |  |  |  |  |
| `CAMasterAgreement` |  | |  |  |  |  |
| `CAInvcgOffsettingReferenceKey` |  | |  |  |  |  |
| `CABillgPlnCreatedByUser` |  | |  |  |  |  |
| `CABillgPlnCreationDate` |  | |  |  |  |  |
| `CABillgPlnCreationTime` |  | |  |  |  |  |
| `CABillgPlnChangedByUser` |  | |  |  |  |  |
| `CABillgPlnChangeDate` |  | |  |  |  |  |
| `CABillgPlnChangeTime` |  | |  |  |  |  |
| `CABillgPlnCreationMode` |  | |  |  |  |  |
| `CABillgPlnNumberBllbleItm` |  | |  |  |  |  |
| `CABillgPlnCompletionDate` |  | |  |  |  |  |
| `CABillgPlnIsTemplate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_ContractAccountPartner` | | ✓ | | | | |
| `_CABillgPlnItem` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED

@EndUserText.label: 'Billing Plan - TP'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  representativeKey: 'CABillgPlnNumber',
  sapObjectNodeType.name: 'ContrAcctgBillingPlan',
  supportedCapabilities:  [ #TRANSACTIONAL_PROVIDER ],
  usageType: {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #XL,
    serviceQuality: #C
  }
}

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  usage.type: [ #TRANSACTIONAL_PROCESSING_SERVICE ],
  viewType: #TRANSACTIONAL
}

define root view entity I_CABillgPlnTP_2
  provider contract transactional_interface
  as projection on R_CABillgPlnTP
{
  key CABillgPlnNumber,
      CABillgPlnCategory,
      CABillgPlnType,
      CABillgPlnStatus,
      CABillgPlnStartDate,
      CABillgPlnEndDate,
      CABillgPlnLastRequestDate,
      CABillgPlnNextRequestDate,
      CABillgPlnDescription,
      CABillgPlnExternalReference,
      LogicalSystem,
      CAApplicationArea,
      BusinessPartner,
      ContractAccount,
      CAInvcgMasterDataType,
      CAContract,
      CAProviderContractItemUUID,
      CASubApplication,
      CAMasterAgreement,
      CAInvcgOffsettingReferenceKey,
      CABillgPlnCreatedByUser,
      CABillgPlnCreationDate,
      CABillgPlnCreationTime,
      CABillgPlnChangedByUser,
      CABillgPlnChangeDate,
      CABillgPlnChangeTime,
      CABillgPlnCreationMode,
      CABillgPlnNumberBllbleItm,
      CABillgPlnCompletionDate,
      CABillgPlnIsTemplate,
      LastChangeDateTime,

      /* Associations */
      @Consumption.hidden: true
      _ContractAccountPartner,
      _CABillgPlnItem : redirected to composition child I_CABillgPlnItemTP_2
}
```
