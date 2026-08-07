---
name: I_CREDITMEMOREQUESTTEXTTP
description: Creditmemorequesttexttp
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
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_CREDITMEMOREQUESTTEXTTP

**Creditmemorequesttexttp**

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
| `Language` | ✓ | |  |  |  |  |
| `LongTextID` | ✓ | |  |  |  |  |
| `LongTextIDForEdit` |  | |  |  |  |  |
| `LanguageForEdit` |  | |  |  |  |  |
| `LongText` |  | |  |  |  |  |
| `CreditMemoRequestType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_CreditMemoRequest` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Credit Memo Request - Text TP'

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
   semanticKey: ['CreditMemoRequest', 'Language', 'LongTextID'],
   dataCategory: #TEXT
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_CreditMemoRequestTextTP 
  as projection on R_CreditMemoRequestTextTP as CreditMemoRequestText 
{
  key CreditMemoRequestText.CreditMemoRequest,
  @Semantics.language:true  
  key CreditMemoRequestText.Language,
  key CreditMemoRequestText.LongTextID, 
  
  @ObjectModel.editableFieldFor: 'LongTextID'
  CreditMemoRequestText.LongTextIDForEdit,    
  @Semantics.language:true  
  @ObjectModel.editableFieldFor: 'Language'
  CreditMemoRequestText.LanguageForEdit, 
  @Semantics.text:true
  CreditMemoRequestText.LongText,       

  //    DCL
  @Consumption.hidden: true
  CreditMemoRequestText.CreditMemoRequestType,
  @Consumption.hidden: true
  CreditMemoRequestText.SalesOrganization,
  @Consumption.hidden: true
  CreditMemoRequestText.DistributionChannel,
  @Consumption.hidden: true
  CreditMemoRequestText.OrganizationDivision,
  
  //Composition
  _CreditMemoRequest : redirected to parent I_CreditMemoRequestTP     
}
```
