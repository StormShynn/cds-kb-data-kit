---
name: I_SCHEDGAGRMTPARTNERAPI01
description: Schedgagrmtpartnerapi 01
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - partner
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGAGRMTPARTNERAPI01

**Schedgagrmtpartnerapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SchedulingAgreement` | ✓ | |  |  |  |  |
| `SchedulingAgreementItem` | ✓ | |  |  |  |  |
| `PurchasingOrganization` | ✓ | |  |  |  |  |
| `SupplierSubrange` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `PartnerCounter` | ✓ | |  |  |  |  |
| `SchedgAgrmtPartner` |  | |  |  |  |  |
| `SchedgAgrmtPartnerName` |  | |  |  |  |  |
| `SchedgAgrmtCategory` |  | |  |  |  |  |
| `SchedgAgrmtType` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `SupplierContact` |  | |  |  |  |  |
| `EmploymentInternalID` |  | |  |  |  |  |
| `PersonWorkAgreement` |  | |  |  |  |  |
| `DefaultPartner` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `PurchasingDocumentType` |  | |  |  |  |  |
| `_SchedgAgrmtHdr` | | ✓ | | | | |
| `_SchedgAgrmtItm` | | ✓ | | | | |
| `_PartnerFunction` | | ✓ | | | | |
| `_PartnerFunctionText` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_PurchasingDocument` | | ✓ | | | | |
| `_PurchasingDocumentItem` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierContact` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SchedgAgrmtHdr` | `I_SchedgagrmthdrApi01` | [1..1] |
| `_SchedgAgrmtItm` | `I_SchedgAgrmtItmApi01` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #COMPOSITE
@EndUserText.label: 'Scheduling Agreement Partners'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view entity I_SchedgAgrmtPartnerAPI01
  as select from I_SchedgAgrmtPartner
  association [1..1] to I_SchedgagrmthdrApi01 as _SchedgAgrmtHdr on $projection.SchedulingAgreement = _SchedgAgrmtHdr.SchedulingAgreement
  association [0..1] to I_SchedgAgrmtItmApi01 as _SchedgAgrmtItm on  _SchedgAgrmtItm.SchedulingAgreement     = $projection.SchedulingAgreement
                                                            and _SchedgAgrmtItm.SchedulingAgreementItem = $projection.SchedulingAgreementItem
{
  key SchedulingAgreement,
  key SchedulingAgreementItem,
  key PurchasingOrganization,
  key SupplierSubrange,
  key Plant,
  key PartnerFunction,
  key PartnerCounter,
      SchedgAgrmtPartner,
      SchedgAgrmtPartnerName,
      SchedgAgrmtCategory,
      SchedgAgrmtType,
      CreatedByUser,
      CreationDate,
      Supplier,
      SupplierContact,
      EmploymentInternalID,
      PersonWorkAgreement,
      DefaultPartner,
      PurchasingGroup,
      PurchasingDocumentType,
      _PartnerFunction,
      _PartnerFunctionText,
      _PersonWorkAgreement,
      _Plant,
      _PurchasingDocument,
      _PurchasingDocumentItem,
      _PurchasingOrganization,
      _Supplier,
      _SupplierContact,
      _SchedgAgrmtHdr,
      _SchedgAgrmtItm
}
```
