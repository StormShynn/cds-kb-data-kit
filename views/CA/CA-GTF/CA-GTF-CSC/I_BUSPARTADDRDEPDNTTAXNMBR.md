---
name: I_BUSPARTADDRDEPDNTTAXNMBR
description: Business PartnerADDRDEPDNTTAXNMBR
app_component: CA-GTF-CSC
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - business-partner
  - tax
  - component:CA-GTF-CSC
  - lob:Cross-Application Components
---
# I_BUSPARTADDRDEPDNTTAXNMBR

**Business PartnerADDRDEPDNTTAXNMBR**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessPartner` | `BusinessPartnerTaxNumberAdr.partner` |
| key `BusinessPartnerAddressID` | `BusinessPartnerTaxNumberAdr.adrnr` |
| key `BPTaxType` | `BusinessPartnerTaxNumberAdr.taxtype` |
| `BPTaxNumber` | `BusinessPartnerTaxNumberAdr.taxnum` |
| `BPTaxLongNumber` | `BusinessPartnerTaxNumberAdr.taxnumxl` |
| `AuthorizationGroup` | `_BusinessPartner.AuthorizationGroup` |
| `_BusinessPartner` | *Association* |
| `_TaxCategoryText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_BusinessPartnerAddress` | `I_BusinessPartnerAddress` | [1..1] |
| `_TaxCategoryText` | `I_BusPartTaxTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPTAXNUMBERADDR'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm : #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey:true
@EndUserText.label: 'BP Address Dependent Tax Numbers'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: #CDS_MODELING_DATA_SOURCE
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_BusPartAddrDepdntTaxNmbr 
  as select from dfkkbptaxnum_adr as BusinessPartnerTaxNumberAdr
  association [1..1] to I_BusinessPartner    as _BusinessPartner on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [1..1] to I_BusinessPartnerAddress as _BusinessPartnerAddress on  $projection.BusinessPartner = _BusinessPartnerAddress.BusinessPartner
                                                                            and $projection.BusinessPartnerAddressID = _BusinessPartnerAddress.AddressNumber
  association [0..*] to I_BusPartTaxTypeText as _TaxCategoryText on $projection.BPTaxType = _TaxCategoryText.BPTaxType  
{
  @ObjectModel.foreignKey.association: '_BusinessPartner'
  @ObjectModel.sapObjectNodeTypeReference: 'BusinessPartner'
  key BusinessPartnerTaxNumberAdr.partner  as BusinessPartner,
  key BusinessPartnerTaxNumberAdr.adrnr    as BusinessPartnerAddressID,
  @ObjectModel.text.association: '_TaxCategoryText'
  @Consumption.valueHelpDefinition: [ { entity: { name:    'I_BusPartAddrDepdntTaxTypeVH', 
                                                  element: 'BPTaxType' }, 
                                        useAsTemplate: true } ] 
  key BusinessPartnerTaxNumberAdr.taxtype  as BPTaxType,
      BusinessPartnerTaxNumberAdr.taxnum   as BPTaxNumber,
      BusinessPartnerTaxNumberAdr.taxnumxl as BPTaxLongNumber,
      _BusinessPartner.AuthorizationGroup,
      _TaxCategoryText,
      _BusinessPartner
}
```
