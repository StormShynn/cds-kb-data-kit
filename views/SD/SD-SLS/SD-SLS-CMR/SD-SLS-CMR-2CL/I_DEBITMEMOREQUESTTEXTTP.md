---
name: I_DEBITMEMOREQUESTTEXTTP
description: Debitmemorequesttexttp
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
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_DEBITMEMOREQUESTTEXTTP

**Debitmemorequesttexttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `DebitMemoRequest` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `LongTextID` | ✓ | |  |  |
| `LongTextIDForEdit` |  | |  |  |
| `LanguageForEdit` |  | |  |  |
| `LongText` |  | |  |  |
| `DebitMemoRequestType` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `OrganizationDivision` |  | |  |  |
| `_DebitMemoRequest` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Debit Memo Request - Text TP'

@AccessControl.authorizationCheck: #CHECK
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
   semanticKey: ['DebitMemoRequest', 'Language', 'LongTextID'],
   dataCategory: #TEXT
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_DebitMemoRequestTextTP 
  as projection on R_DebitMemoRequestTextTP as DebitMemoRequestText 
{
  key DebitMemoRequestText.DebitMemoRequest,
  @Semantics.language:true  
  key DebitMemoRequestText.Language,
  key DebitMemoRequestText.LongTextID, 
  
  @ObjectModel.editableFieldFor: 'LongTextID'
  DebitMemoRequestText.LongTextIDForEdit,    
  @Semantics.language:true  
  @ObjectModel.editableFieldFor: 'Language'
  DebitMemoRequestText.LanguageForEdit, 
  @Semantics.text:true
  DebitMemoRequestText.LongText,       

  //    DCL
  @Consumption.hidden: true
  DebitMemoRequestText.DebitMemoRequestType,
  @Consumption.hidden: true
  DebitMemoRequestText.SalesOrganization,
  @Consumption.hidden: true
  DebitMemoRequestText.DistributionChannel,
  @Consumption.hidden: true
  DebitMemoRequestText.OrganizationDivision,
  
  //Composition
  _DebitMemoRequest : redirected to parent I_DebitMemoRequestTP     
}
```
