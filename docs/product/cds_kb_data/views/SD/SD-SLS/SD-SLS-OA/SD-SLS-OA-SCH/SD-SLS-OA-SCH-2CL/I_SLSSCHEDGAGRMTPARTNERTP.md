---
name: I_SLSSCHEDGAGRMTPARTNERTP
description: "Slsschedgagrmtpartnertp"
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
  - partner
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SLSSCHEDGAGRMTPARTNERTP

**Slsschedgagrmtpartnertp**

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
| `PartnerFunction` | ✓ | |  |  |  |  |
| `PartnerFunctionForEdit` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `Partner` |  | |  |  |  |  |
| `SalesSchedgAgrmtType` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `_SalesSchedulingAgreement` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Scheduling Agreement Partner - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #C,
        sizeCategory:   #L
    },
    semanticKey:           ['SalesSchedulingAgreement', 'PartnerFunction'],
    modelingPattern:       #TRANSACTIONAL_INTERFACE ,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

define view entity I_SlsSchedgAgrmtPartnerTP 
as projection on R_SlsSchedgAgrmtPartnerTP as SalesSchedgAgrmtPartner
{
  key SalesSchedgAgrmtPartner.SalesSchedulingAgreement,
  key SalesSchedgAgrmtPartner.PartnerFunction,
      @ObjectModel.editableFieldFor: 'PartnerFunction'
      SalesSchedgAgrmtPartner.PartnerFunctionForEdit,
      SalesSchedgAgrmtPartner.Customer,
      SalesSchedgAgrmtPartner.Personnel,
      SalesSchedgAgrmtPartner.Supplier,
      SalesSchedgAgrmtPartner.ContactPerson,
      SalesSchedgAgrmtPartner.ReferenceBusinessPartner, 
      SalesSchedgAgrmtPartner.Partner, 
      
      //DCL
      @Consumption.hidden: true
      SalesSchedgAgrmtPartner.SalesSchedgAgrmtType,
      @Consumption.hidden: true
      SalesSchedgAgrmtPartner.OrganizationDivision,
      @Consumption.hidden: true
      SalesSchedgAgrmtPartner.SalesOrganization,
      @Consumption.hidden: true
      SalesSchedgAgrmtPartner.DistributionChannel,
      
      //Composition
      _SalesSchedulingAgreement : redirected to parent I_SalesSchedulingAgreementTP      
      
}
```
