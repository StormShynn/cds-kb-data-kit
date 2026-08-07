---
name: I_PURGQUOTAARRGMTTP_2
description: Purgquotaarrgmttp 2
app_component: MM-PUR-SQ-QTA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SQ
  - interface-view
  - transactional-processing
  - component:MM-PUR-SQ-QTA-2CL
  - lob:Sourcing & Procurement
---
# I_PURGQUOTAARRGMTTP_2

**Purgquotaarrgmttp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SQ-QTA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `QuotaArrangement` | ✓ | |  |  |
| `Material` |  | |  |  |
| `Plant` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `CreationDate` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `UserDescription` |  | |  |  |
| `MaterialBaseUnit` |  | |  |  |
| `MinQtyForSpltQuota` |  | |  |  |
| `_PurgQuotaArrgmtItem` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Quota Arrangement Header - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['QuotaArrangement']
@ObjectModel.representativeKey: 'QuotaArrangement'

@ObjectModel: {
    usageType: {
      sizeCategory: #M,
      serviceQuality: #B,
      dataClass: #TRANSACTIONAL
    }
  }
@ObjectModel.sapObjectNodeType.name: 'PurchasingQuotaArrangement'
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_PurgQuotaArrgmtTP_2
 provider contract transactional_interface  
  as projection on R_PurgQuotaArrgmtTP
{
  key QuotaArrangement,
      Material,
      Plant,
      @Semantics.businessDate.to: true
      ValidityEndDate,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      CreationDate,
      @Semantics.user.createdBy: true
      CreatedByUser,
      LastChangeDateTime,
      @Semantics.text: true
      UserDescription,
      MaterialBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit' 
      MinQtyForSpltQuota,
      /* Associations */
      _PurgQuotaArrgmtItem : redirected to composition child I_PurgQuotaArrgmtItemTP_2
}
```
