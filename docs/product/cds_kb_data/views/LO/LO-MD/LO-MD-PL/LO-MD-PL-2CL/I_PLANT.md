---
name: I_PLANT
description: "Plant"
app_component: LO-MD-PL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-PL
  - interface-view
  - plant
  - component:LO-MD-PL-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PLANT

**Plant**

| Property | Value |
|---|---|
| App Component | `LO-MD-PL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |  |  |
| `PlantName` |  | |  | `cast(name1 as werks_name preserving type )` |  |  |
| `ValuationArea` |  | |  | `bwkey` |  |  |
| `PlantCustomer` |  | |  | `kunnr` |  |  |
| `PlantSupplier` |  | |  | `lifnr` |  |  |
| `FactoryCalendar` |  | |  | `fabkl` |  |  |
| `DefaultPurchasingOrganization` |  | |  | `ekorg` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `AddressID` |  | |  | `adrnr` |  |  |
| `PlantCategory` |  | |  | `vlfkz` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `Language` |  | |  | `spras` |  |  |
| `IsMarkedForArchiving` |  | |  | `achvm` |  |  |
| `_Address` | | ✓ | | | | |
| `_OrganizationAddress` | | ✓ | | | | |
| `_StandardOrganizationAddress` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_ResponsiblePurchaseOrg` | | ✓ | | | | |
| `_PlantCategoryText` | | ✓ | | | | |
| `_ValuationArea` | | ✓ | | | | |
| `_MRPArea` | | ✓ | | | | |
| `_PlantHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Address` | `I_Address` | [0..1] |
| `_OrganizationAddress` | `I_OrganizationAddress` | [0..*] |
| `_StandardOrganizationAddress` | `I_OrganizationAddress` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_ResponsiblePurchaseOrg` | `I_PlantPurchasingOrganization` | [0..*] |
| `_PlantCategoryText` | `I_PlantCategoryT` | [0..*] |
| `_ValuationArea` | `I_ValuationArea` | [0..1] |
| `_MRPArea` | `I_MRPArea` | [0..*] |
| `_PlantHierarchyNode` | `I_PlantHierarchyNode` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@EndUserText.label: 'Plant'
@ObjectModel:{
               usageType:{
                           sizeCategory: #S,
                           serviceQuality: #A,
                           dataClass:#CUSTOMIZING
                         },
               representativeKey: 'Plant',
               sapObjectNodeType: {
                                    name: 'Plant'
                                  },
               modelingPattern: #ANALYTICAL_DIMENSION,
               supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
             }
@AccessControl:{
                 authorizationCheck: #NOT_REQUIRED,
                 personalData.blocking: #NOT_REQUIRED,
                 privilegedAssociations: ['_Address', '_OrganizationAddress', '_StandardOrganizationAddress']
               }
@VDM:{
       viewType: #BASIC,
       lifecycle.contract.type: #PUBLIC_LOCAL_API
     }
@Analytics:{
             internalName: #LOCAL,
             technicalName: 'IPLANT',
             dataCategory: #DIMENSION,
             dataExtraction.enabled: true
           }
@Search.searchable: true
@Metadata:{
            allowExtensions: true,
            ignorePropagatedAnnotations: true
          }

define view entity I_Plant
  as select from t001w
  association [0..1] to I_Address                     as _Address                     on  $projection.AddressID = _Address.AddressID
  association [0..*] to I_OrganizationAddress         as _OrganizationAddress         on  $projection.AddressID = _OrganizationAddress.AddressID
                                                                                      and _OrganizationAddress.AddressPersonID = ''
/*
For association _OrganizationAddress an ON condition for AddressRepresentationCode is missing. With the abillity to maintain also an International Address version
it is possible to have more than one address for the plant. Due to this cardinality break compared to _Address the additional association _StandardOrganizationAddress
has been introduced and defined as successor.
*/ 
  association [0..1] to I_OrganizationAddress         as _StandardOrganizationAddress on $projection.AddressID = _StandardOrganizationAddress.AddressID
                                                                                      and _StandardOrganizationAddress.AddressPersonID = ''
                                                                                      and _StandardOrganizationAddress.AddressRepresentationCode = ''
  association [0..1] to I_Customer                    as _Customer                    on  $projection.PlantCustomer = _Customer.Customer
  association [0..1] to I_Supplier                    as _Supplier                    on  $projection.PlantSupplier = _Supplier.Supplier
  association [0..*] to I_PlantPurchasingOrganization as _ResponsiblePurchaseOrg      on  $projection.Plant = _ResponsiblePurchaseOrg.Plant
  association [0..*] to I_PlantCategoryT              as _PlantCategoryText           on  $projection.PlantCategory = _PlantCategoryText.PlantCategory
  association [0..1] to I_ValuationArea               as _ValuationArea               on  $projection.ValuationArea = _ValuationArea.ValuationArea
  association [0..*] to I_MRPArea                     as _MRPArea                     on  $projection.Plant = _MRPArea.MRPAreaPlant
  association [0..*] to I_PlantHierarchyNode          as _PlantHierarchyNode          on  $projection.Plant = _PlantHierarchyNode.Plant
{
      @ObjectModel.text.element: ['PlantName']
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.hierarchy.association: '_PlantHierarchyNode'
  key werks                                      as Plant,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      cast(name1 as werks_name preserving type ) as PlantName,
      bwkey                                      as ValuationArea,
      @ObjectModel.foreignKey.association: '_Customer'
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      kunnr                                      as PlantCustomer,
      @ObjectModel.foreignKey.association: '_Supplier'
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Supplier_VH',
                     element: 'Supplier' }
        }]
      lifnr                                      as PlantSupplier,
      fabkl                                      as FactoryCalendar,
      ekorg                                      as DefaultPurchasingOrganization,
      vkorg                                      as SalesOrganization,
/*
The right foreignKey.association would be to _StandardOrganizationAddress
But that creates issues for all analytical views which associate I_Plant due to the above hard coded ON condition on AddressPersonID = ''
and AddressRepresentationCode = ''
As long as that is not solved by BW-BEX-OT-ODP, the foreignKey.assocaition is set back to _Address
*/      
      @ObjectModel.foreignKey.association: '_Address'
      adrnr                                      as AddressID,
      @ObjectModel.sapObjectNodeTypeReference: 'PlantCategory'
      vlfkz                                      as PlantCategory,
      vtweg                                      as DistributionChannel,
      spart                                      as Division,
      spras                                      as Language,
      achvm                                      as IsMarkedForArchiving, //2949107
      @API: {
              element: {
                         releaseState: #DEPRECATED,
                         successor: '_StandardOrganizationAddress'
                       }
            }
      @VDM: {
              lifecycle: {
                           status: #DEPRECATED,
                           successor: '_StandardOrganizationAddress'
                         }
            }
      _Address,
      _OrganizationAddress,
      _StandardOrganizationAddress,
      _Customer,
      _Supplier,
      _ResponsiblePurchaseOrg,
      _PlantCategoryText,
      _ValuationArea,
      _MRPArea,
      _PlantHierarchyNode
}
```
