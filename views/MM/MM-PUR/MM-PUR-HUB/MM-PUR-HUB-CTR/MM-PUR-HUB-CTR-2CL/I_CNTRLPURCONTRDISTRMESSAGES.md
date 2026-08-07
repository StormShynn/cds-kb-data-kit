---
name: I_CNTRLPURCONTRDISTRMESSAGES
description: Cntrlpurcontrdistrmessages
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
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLPURCONTRDISTRMESSAGES

**Cntrlpurcontrdistrmessages**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CentralPurchaseContract` | ✓ | |  | `PurchasingDocument` |
| `CntrlPurContrDistrMsgSqncNmbr` | ✓ | |  | `SequenceNumber` |
| `DistrResponseMessageUUID` | ✓ | |  |  |
| `PurchasingDocumentCategory` |  | |  |  |
| `ExtContractForPurg` |  | |  |  |
| `LogicalSystem` |  | |  |  |
| `SystemMessageType` |  | |  |  |
| `SystemMessageIdentification` |  | |  |  |
| `SystemMessageNumber` |  | |  |  |
| `SystemMessageVariable1` |  | |  |  |
| `SystemMessageVariable2` |  | |  |  |
| `SystemMessageVariable3` |  | |  |  |
| `SystemMessageVariable4` |  | |  |  |
| `SystemMessageText` |  | |  |  |
| `DistrResponseReceivedDateTime` |  | |  |  |
| `IsEndOfPurposeBlocked` |  | | `_CentralPurchaseContract` | `IsEndOfPurposeBlocked` |
| `PurchasingOrganization` |  | | `_CentralPurchaseContract` | `PurchasingOrganization` |
| `PurchasingGroup` |  | | `_CentralPurchaseContract` | `PurchasingGroup` |
| `PurchaseContractType` |  | | `_CentralPurchaseContract` | `PurchaseContractType` |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED

@EndUserText.label: 'CCTR Header Distribution Message'
@VDM.viewType : #COMPOSITE

@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

@ObjectModel.semanticKey:  [ 'CntrlPurContrDistrMsgSqncNmbr','DistrResponseMessageUUID' ]

@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@Metadata.ignorePropagatedAnnotations: true
define view entity I_CntrlPurContrDistrMessages
  as select from I_ExtendedPurgDocDistrMessages

{
  key PurchasingDocument                          as CentralPurchaseContract,
  key SequenceNumber                              as CntrlPurContrDistrMsgSqncNmbr,
  key DistrResponseMessageUUID,
      PurchasingDocumentCategory,
      ExtContractForPurg,
      LogicalSystem,
      SystemMessageType,
      SystemMessageIdentification,
      SystemMessageNumber,
      SystemMessageVariable1,
      SystemMessageVariable2,
      SystemMessageVariable3,
      SystemMessageVariable4,
      SystemMessageText,
      @Semantics.dateTime:true
      DistrResponseReceivedDateTime,
      
      @Semantics.booleanIndicator: true
      _CentralPurchaseContract.IsEndOfPurposeBlocked,
      _CentralPurchaseContract.PurchasingOrganization,
      _CentralPurchaseContract.PurchasingGroup,
      _CentralPurchaseContract.PurchaseContractType
}
```
