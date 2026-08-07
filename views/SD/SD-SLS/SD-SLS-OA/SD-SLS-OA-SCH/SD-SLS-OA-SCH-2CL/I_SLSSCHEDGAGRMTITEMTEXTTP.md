---
name: I_SLSSCHEDGAGRMTITEMTEXTTP
description: Slsschedgagrmtitemtexttp
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - transactional-processing
  - text
  - item-level
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SLSSCHEDGAGRMTITEMTEXTTP

**Slsschedgagrmtitemtexttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesSchedulingAgreement` | ✓ | |  |  |  |  |
| `SalesSchedulingAgreementItem` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `LongTextID` | ✓ | |  |  |  |  |
| `LongTextIDForEdit` |  | |  |  |  |  |
| `LanguageForEdit` |  | |  |  |  |  |
| `LongText` |  | |  |  |  |  |
| `SalesSchedgAgrmtType` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_SalesSchedulingAgreement` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Scheduling Agreement Item - Text TP' 

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
   semanticKey: ['SalesSchedulingAgreement', 'SalesSchedulingAgreementItem', 'Language', 'LongTextID'],
   dataCategory: #TEXT
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SlsSchedgAgrmtItemTextTP 
as projection on R_SlsSchedgAgrmtItemTextTP as SalesSchedgAgrmtItemText
{
  key SalesSchedgAgrmtItemText.SalesSchedulingAgreement,
  key SalesSchedgAgrmtItemText.SalesSchedulingAgreementItem,
  @Semantics.language:true    
  key SalesSchedgAgrmtItemText.Language,
  key SalesSchedgAgrmtItemText.LongTextID,
   
  @ObjectModel.editableFieldFor: 'LongTextID'
  SalesSchedgAgrmtItemText.LongTextIDForEdit,
  @Semantics.language:true  
  @ObjectModel.editableFieldFor: 'Language'
  SalesSchedgAgrmtItemText.LanguageForEdit,
  @Semantics.text:true
  SalesSchedgAgrmtItemText.LongText, 
  
  //    DCL
  @Consumption.hidden: true
  SalesSchedgAgrmtItemText.SalesSchedgAgrmtType,
  @Consumption.hidden: true
  SalesSchedgAgrmtItemText.OrganizationDivision,
  @Consumption.hidden: true
  SalesSchedgAgrmtItemText.SalesOrganization,
  @Consumption.hidden: true
  SalesSchedgAgrmtItemText.DistributionChannel,
 
  //Composition
  _Item                     : redirected to parent I_SlsSchedulingAgreementItemTP, 
  _SalesSchedulingAgreement : redirected to I_SalesSchedulingAgreementTP     
  
}
```
