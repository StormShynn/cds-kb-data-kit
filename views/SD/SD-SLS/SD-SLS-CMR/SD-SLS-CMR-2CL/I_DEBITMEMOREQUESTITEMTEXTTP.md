---
name: I_DEBITMEMOREQUESTITEMTEXTTP
description: Debitmemorequestitemtexttp
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
  - item-level
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_DEBITMEMOREQUESTITEMTEXTTP

**Debitmemorequestitemtexttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `DebitMemoRequest` | `DebitMemoRequestItemText.DebitMemoRequest` |
| key `DebitMemoRequestItem` | `DebitMemoRequestItemText.DebitMemoRequestItem` |
| key `Language` | `DebitMemoRequestItemText.Language` |
| key `LongTextID` | `DebitMemoRequestItemText.LongTextID` |
| `LongTextIDForEdit` | `DebitMemoRequestItemText.LongTextIDForEdit` |
| `LanguageForEdit` | `DebitMemoRequestItemText.LanguageForEdit` |
| `LongText` | `DebitMemoRequestItemText.LongText` |
| `DebitMemoRequestType` | `DebitMemoRequestItemText.DebitMemoRequestType` |
| `SalesOrganization` | `DebitMemoRequestItemText.SalesOrganization` |
| `DistributionChannel` | `DebitMemoRequestItemText.DistributionChannel` |
| `OrganizationDivision` | `DebitMemoRequestItemText.OrganizationDivision` |
| `_Item` | *Association* |
| `_DebitMemoRequest` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Debit Memo Request Item - Text TP'

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
   semanticKey: ['DebitMemoRequest', 'DebitMemoRequestItem', 'Language', 'LongTextID'],
   dataCategory: #TEXT
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_DebitMemoRequestItemTextTP
  as projection on R_DebitMemoRequestItemTextTP as DebitMemoRequestItemText 
{
  key DebitMemoRequestItemText.DebitMemoRequest,
  key DebitMemoRequestItemText.DebitMemoRequestItem,
  @Semantics.language:true    
  key DebitMemoRequestItemText.Language,
  key DebitMemoRequestItemText.LongTextID, 
  
  @ObjectModel.editableFieldFor: 'LongTextID'
  DebitMemoRequestItemText.LongTextIDForEdit,    
  @Semantics.language:true  
  @ObjectModel.editableFieldFor: 'Language'
  DebitMemoRequestItemText.LanguageForEdit,        
  @Semantics.text:true
  DebitMemoRequestItemText.LongText,
  
  //    DCL
  @Consumption.hidden: true
  DebitMemoRequestItemText.DebitMemoRequestType,
  @Consumption.hidden: true
  DebitMemoRequestItemText.SalesOrganization,
  @Consumption.hidden: true
  DebitMemoRequestItemText.DistributionChannel,
  @Consumption.hidden: true
  DebitMemoRequestItemText.OrganizationDivision,
 
  //Composition
  _Item       : redirected to parent I_DebitMemoRequestItemTP,
  _DebitMemoRequest : redirected to I_DebitMemoRequestTP
      
}
```
