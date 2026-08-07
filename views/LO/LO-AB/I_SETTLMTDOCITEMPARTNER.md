---
name: I_SETTLMTDOCITEMPARTNER
description: Settlmtdocitempartner
app_component: LO-AB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - interface-view
  - item-level
  - partner
  - component:LO-AB
  - lob:Logistics General
---
# I_SETTLMTDOCITEMPARTNER

**Settlmtdocitempartner**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SettlmtDoc` |  | |  | `}] } key SettlmtDoc` |
| `SettlmtDocItem` |  | |  | `}] } key SettlmtDocItem` |
| `PartnerFunction` | ✓ | |  |  |
| `PartnerCounter` | ✓ | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDate` |  | |  |  |
| `Supplier` |  | |  | `}] } Supplier` |
| `Customer` |  | |  | `}] } Customer` |
| `ContactPerson` |  | |  |  |
| `Personnel` |  | |  |  |
| `AddressID` |  | |  |  |
| `AddressPersonID` |  | |  |  |
| `ReferenceBusinessPartner` |  | |  |  |
| `SettlmtDocPartAddrRefType` |  | |  |  |
| `AddressObjectType` |  | |  |  |
| `BPAddrDeterminationTransaction` |  | |  |  |
| `BPRefAddressIDForDocSpcfcAddr` |  | |  |  |
| `VATRegistration` |  | |  |  |
| `_SettlmtDoc` | | ✓ | | |
| `_SettlmtDocItem` | | ✓ | | |
| `_Address` | | ✓ | | |
| `_PartnerFunction` | | ✓ | | |
| `_Supplier` | | ✓ | | |
| `_Customer` | | ✓ | | |
| `_DfltAddrRprstn` | | ✓ | | |
| `_BusinessPartnerAddress` | | ✓ | | |
| `_PersonWorkplaceAddrDfltRprstn` | | ✓ | | |
| `_BPRefAddressForDocSpcfcAddr` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SettlmtDoc` | `I_SettlmtDoc` | [1..1] |
| `_SettlmtDocItem` | `I_SettlmtDocItem` | [1..1] |
| `_Address` | `I_Address` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Settlement Document Item Partner'
@AccessControl: { 
    authorizationCheck: #MANDATORY,
    personalData.blocking: #('TRANSACTIONAL_DATA'),
    privilegedAssociations: [ '_Address', '_DfltAddrRprstn', '_PersonWorkplaceAddrDfltRprstn' ]
    }
@ObjectModel: {
    representativeKey: 'PartnerCounter',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE ],
    usageType: {
      dataClass:      #TRANSACTIONAL, 
      serviceQuality: #A,
      sizeCategory:   #XL
      }
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
    }
@Analytics.technicalName: 'IWLFSTDOCITPART'
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: true
    }

define view entity I_SettlmtDocItemPartner
  as select from R_SettlmtDocItemPartner

  association [1..1] to I_SettlmtDoc     as _SettlmtDoc     on  $projection.SettlmtDoc = _SettlmtDoc.SettlmtDoc
  association [1..1] to I_SettlmtDocItem as _SettlmtDocItem on  $projection.SettlmtDoc     = _SettlmtDocItem.SettlmtDoc
                                                            and $projection.SettlmtDocItem = _SettlmtDocItem.SettlmtDocItem
  association [0..1] to I_Address        as _Address        on  $projection.AddressID = _Address.AddressID

{
      @ObjectModel.foreignKey.association: '_SettlmtDoc'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocStdVH', element: 'SettlmtDoc' } }]
      }
  key SettlmtDoc,
      @ObjectModel.foreignKey.association: '_SettlmtDocItem'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocItemStdVH', element: 'SettlmtDocItem' } }]
      }
  key SettlmtDocItem,
      @ObjectModel.foreignKey.association: '_PartnerFunction'
  key PartnerFunction,
  key PartnerCounter,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @ObjectModel.foreignKey.association: '_Supplier'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' } }]
      }
      Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_Customer_VH', element: 'Customer' } }]
      }
      Customer,
      ContactPerson,
      Personnel,
      @ObjectModel.foreignKey.association: '_Address'
      AddressID,

      AddressPersonID,
      ReferenceBusinessPartner,
      SettlmtDocPartAddrRefType,
      AddressObjectType,
      BPAddrDeterminationTransaction,
      BPRefAddressIDForDocSpcfcAddr,

      VATRegistration,

      /* Associations */
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _SettlmtDoc,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _SettlmtDocItem,
      _PartnerFunction,
      _Supplier,
      _Customer,
      _Address,
      _DfltAddrRprstn,
      _BusinessPartnerAddress,
      _PersonWorkplaceAddrDfltRprstn,
      _BPRefAddressForDocSpcfcAddr

}
```
