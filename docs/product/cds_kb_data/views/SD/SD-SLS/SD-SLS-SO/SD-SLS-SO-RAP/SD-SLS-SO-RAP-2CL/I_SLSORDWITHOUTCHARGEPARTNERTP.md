---
name: I_SLSORDWITHOUTCHARGEPARTNERTP
description: "Slsordwithoutchargepartnertp"
app_component: SD-SLS-SO-RAP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - transactional-processing
  - partner
  - component:SD-SLS-SO-RAP-2CL
  - lob:Sales & Distribution
---
# I_SLSORDWITHOUTCHARGEPARTNERTP

**Slsordwithoutchargepartnertp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-RAP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrderWithoutCharge` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `PartnerFunctionForEdit` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `Partner` |  | |  |  |  |  |
| `SalesOrderWithoutChargeType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_SalesOrderWithoutCharge` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Order Without Charge Partner - TP'

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
   semanticKey: ['SalesOrderWithoutCharge', 'PartnerFunction']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SlsOrdWithoutChargePartnerTP
  as projection on R_SlsOrdWithoutChargePartnerTP as SalesOrderWithoutChargePartner
{
  key SalesOrderWithoutChargePartner.SalesOrderWithoutCharge,
  key SalesOrderWithoutChargePartner.PartnerFunction,
      @ObjectModel.editableFieldFor: 'PartnerFunction'
      SalesOrderWithoutChargePartner.PartnerFunctionForEdit,
      SalesOrderWithoutChargePartner.Customer,
      SalesOrderWithoutChargePartner.Supplier,
      SalesOrderWithoutChargePartner.Personnel,
      SalesOrderWithoutChargePartner.ContactPerson,
      SalesOrderWithoutChargePartner.ReferenceBusinessPartner,
      SalesOrderWithoutChargePartner.Partner,

      //    DCL
      @Consumption.hidden: true
      SalesOrderWithoutChargePartner.SalesOrderWithoutChargeType,
      @Consumption.hidden: true
      SalesOrderWithoutChargePartner.SalesOrganization,
      @Consumption.hidden: true
      SalesOrderWithoutChargePartner.DistributionChannel,
      @Consumption.hidden: true
      SalesOrderWithoutChargePartner.OrganizationDivision,

      //Composition
      _SalesOrderWithoutCharge : redirected to parent I_SalesOrderWithoutChargeTP

}
```
