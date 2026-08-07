---
name: I_EMRKDFUNDDOCMAILPARAM
description: "Emrkdfunddocmailparam"
app_component: PSM-FM-PO-EF
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - PSM-FM
  - PSM-FM-PO
  - interface-view
  - component:PSM-FM-PO-EF
  - lob:Other
---
# I_EMRKDFUNDDOCMAILPARAM

**Emrkdfunddocmailparam**

| Property | Value |
|---|---|
| App Component | `PSM-FM-PO-EF` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EarmarkedFundsDocument` | ✓ | |  |  |  |  |
| `EarmarkedFundsDocumentType` |  | |  |  |  |  |
| `EarmarkedFundsDocumentCategory` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `EmrkdFndsDocLastChangedByUser` |  | |  |  |  |  |
| `EmrkdFndsDocCreatedByUser` |  | |  |  |  |  |
| `_EarmarkedFundsDocumentItem` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck:#MANDATORY 
@EndUserText.label: 'Earmarked Funds Document Email Parameter'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType : #COMPOSITE
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE ]

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL


define view entity I_EmrkdFundDocMailParam as select from I_EarmarkedFundsDocument
{
  
  key EarmarkedFundsDocument,
  
      _EarmarkedFundsDocumentItem,
   
      EarmarkedFundsDocumentType,
      
      EarmarkedFundsDocumentCategory,
      
      CompanyCode,     
          
      EmrkdFndsDocLastChangedByUser,
      
      EmrkdFndsDocCreatedByUser
  
}
```
