---
name: I_EMRKDFUNDDOCMAILPARAM
description: "Emrkdfunddocmailparam"
app_component: PSM-FM-PO-EF
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
