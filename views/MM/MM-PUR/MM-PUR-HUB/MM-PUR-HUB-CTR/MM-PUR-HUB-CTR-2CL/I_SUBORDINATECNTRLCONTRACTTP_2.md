---
name: I_SUBORDINATECNTRLCONTRACTTP_2
description: Subordinatecntrlcontracttp 2
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - transactional-processing
  - contract
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_SUBORDINATECNTRLCONTRACTTP_2

**Subordinatecntrlcontracttp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchasingParentDocument` | `PurchasingParentDocument` |
| key `SubordCntrlPurContract` | `SubordCntrlPurContract` |
| key `ProcmtHubCompanyCodeGroupingID` | `ProcmtHubCompanyCodeGroupingID` |
| `CompanyCode` | `CompanyCode` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `PurchasingGroup` | `PurchasingGroup` |
| `PurchaseContractType` | `PurchaseContractType` |
| `PurchasingDocumentSubtype` | `PurchasingDocumentSubtype` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `CntrlPurContrDescription` | `CntrlPurContrDescription` |
| `SubordCntrlPurContrLastUpdtSts` | `SubordCntrlPurContrLastUpdtSts` |
| `SubordCntrlContrLastUpdtDteTme` | `SubordCntrlContrLastUpdtDteTme` |
| `DistrResponseMessageUUID` | `DistrResponseMessageUUID` |
| `IsEndOfPurposeBlocked` | `IsEndOfPurposeBlocked` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_Cntrlpurchasecontract` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Subordinate Cntrl Contract - TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'PurchasingParentDocument', 'SubordCntrlPurContract', 'ProcmtHubCompanyCodeGroupingID' ]

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_SubordinateCntrlContractTP_2
  as projection on R_SubordinateCntrlContractTP
{

  key PurchasingParentDocument,
  key SubordCntrlPurContract,
  key ProcmtHubCompanyCodeGroupingID,
      CompanyCode,
      PurchasingOrganization,
      PurchasingGroup,
      PurchaseContractType,
      PurchasingDocumentSubtype,
      ValidityStartDate,
      ValidityEndDate,
      CntrlPurContrDescription,
      SubordCntrlPurContrLastUpdtSts,
      SubordCntrlContrLastUpdtDteTme,
      DistrResponseMessageUUID,
      
      @Semantics.booleanIndicator: true
      IsEndOfPurposeBlocked,
      LastChangeDateTime,
      /* Associations */
      _Cntrlpurchasecontract : redirected to parent I_CntrlPurchaseContractTP_2

}
```
