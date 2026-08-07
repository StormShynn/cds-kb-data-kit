---
name: I_SALESORGANIZATION
description: Sales Organization
app_component: SD-CRF-ORG-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-CRF
  - SD-CRF-ORG
  - interface-view
  - sales-organization
  - component:SD-CRF-ORG-2CL
  - lob:Sales & Distribution
  - bo:SalesOrganization
---
# I_SALESORGANIZATION

**Sales Organization**

| Property | Value |
|---|---|
| App Component | `SD-CRF-ORG-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrganization` | ✓ | |  | `vkorg` |  |  |
| `SalesOrganizationCurrency` |  | |  | `waers` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `IntercompanyBillingCustomer` |  | |  | `kunnr` |  |  |
| `ArgentinaDeliveryDateEvent` |  | |  | `j_1anutime` |  |  |
| `AddressID` |  | |  | `adrnr` |  |  |
| `VATRegnNumberDeterminationRule` |  | |  | `xstceg` |  |  |
| `_Text` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_IntercompanyBillingCustomer` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |
| `_DfltAddrRprstn` | | ✓ | | | | |
| `_SlsOrgHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SalesOrganizationText` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_IntercompanyBillingCustomer` | `I_Customer` | [0..1] |
| `_Address` | `I_Address` | [0..1] |
| `_DfltAddrRprstn` | `I_Address_2` | [0..1] |
| `_SlsOrgHierarchyNode` | `I_SlsOrgHierarchyNode` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'SalesOrganization'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Sales Organization'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSALESORG'
@Search.searchable: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #ANALYTICAL_DIMENSION,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY  ]
@AccessControl.privilegedAssociations: ['_Address', '_DfltAddrRprstn']
@Consumption.ranked: true
@ObjectModel.sapObjectNodeType.name: 'SalesOrganization'

define view I_SalesOrganization
  as select from tvko
  association [0..*] to I_SalesOrganizationText as _Text                        on  $projection.SalesOrganization = _Text.SalesOrganization
  association [0..1] to I_CompanyCode           as _CompanyCode                 on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Customer              as _IntercompanyBillingCustomer on  $projection.IntercompanyBillingCustomer = _IntercompanyBillingCustomer.Customer
  association [0..1] to I_Address               as _Address                     on  $projection.AddressID = _Address.AddressID
  association [0..1] to I_Address_2             as _DfltAddrRprstn              on  $projection.AddressID                     = _DfltAddrRprstn.AddressID
                                                                                and _DfltAddrRprstn.AddressPersonID           is initial
                                                                                and _DfltAddrRprstn.AddressRepresentationCode is initial
  association [0..*] to I_SlsOrgHierarchyNode   as _SlsOrgHierarchyNode         on  $projection.SalesOrganization = _SlsOrgHierarchyNode.SalesOrganization
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_SlsOrgHierarchyNode'
  key tvko.vkorg as SalesOrganization,


      tvko.waers as SalesOrganizationCurrency,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      tvko.bukrs as CompanyCode,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      @ObjectModel.foreignKey.association: '_IntercompanyBillingCustomer'
      tvko.kunnr as IntercompanyBillingCustomer,

      @Consumption.hidden: true
      j_1anutime as ArgentinaDeliveryDateEvent,

      @ObjectModel.foreignKey.association: '_Address'
      @Consumption.filter.hidden: true
      tvko.adrnr as AddressID,

      @Consumption.hidden: true
      xstceg     as VATRegnNumberDeterminationRule,
      _SlsOrgHierarchyNode,
      //Associations
      _Text,
      _CompanyCode,
      _IntercompanyBillingCustomer,
      _Address,
      _DfltAddrRprstn
};
```
