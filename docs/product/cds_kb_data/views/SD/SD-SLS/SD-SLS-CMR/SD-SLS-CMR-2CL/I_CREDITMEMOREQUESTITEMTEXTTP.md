---
name: I_CREDITMEMOREQUESTITEMTEXTTP
description: "Creditmemorequestitemtexttp"
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - interface-view
  - transactional-processing
  - text
  - credit
  - item-level
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_CREDITMEMOREQUESTITEMTEXTTP

**Creditmemorequestitemtexttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditMemoRequest` | ✓ | |  |  |  |  |
| `CreditMemoRequestItem` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `LongTextID` | ✓ | |  |  |  |  |
| `LongTextIDForEdit` |  | |  |  |  |  |
| `LanguageForEdit` |  | |  |  |  |  |
| `LongText` |  | |  |  |  |  |
| `CreditMemoRequestType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_CreditMemoRequest` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Credit Memo Request Item - Text TP'

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['CreditMemoRequest', 'CreditMemoRequestItem', 'Language', 'LongTextID'],
   dataCategory: #TEXT
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_CreditMemoRequestItemTextTP
  as projection on R_CreditMemoRequestItemTextTP as CreditMemoRequestItemText 
{
  key CreditMemoRequestItemText.CreditMemoRequest,
  key CreditMemoRequestItemText.CreditMemoRequestItem,
  @Semantics.language:true    
  key CreditMemoRequestItemText.Language,
  key CreditMemoRequestItemText.LongTextID, 
  
  @ObjectModel.editableFieldFor: 'LongTextID'
  CreditMemoRequestItemText.LongTextIDForEdit,    
  @Semantics.language:true  
  @ObjectModel.editableFieldFor: 'Language'
  CreditMemoRequestItemText.LanguageForEdit,        
  @Semantics.text:true
  CreditMemoRequestItemText.LongText,
  
  //    DCL
  @Consumption.hidden: true
  CreditMemoRequestItemText.CreditMemoRequestType,
  @Consumption.hidden: true
  CreditMemoRequestItemText.SalesOrganization,
  @Consumption.hidden: true
  CreditMemoRequestItemText.DistributionChannel,
  @Consumption.hidden: true
  CreditMemoRequestItemText.OrganizationDivision,
 
  //Composition
  _Item       : redirected to parent I_CreditMemoRequestItemTP,
  _CreditMemoRequest : redirected to I_CreditMemoRequestTP
      
}
```
