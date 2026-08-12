---
name: I_CUSTOMERSUPPLIERINDUSTRY
description: "Customersupplierindustry"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - customer
  - supplier
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:Customer
  - bo:Supplier
---
# I_CUSTOMERSUPPLIERINDUSTRY

**Customersupplierindustry**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Industry` | ✓ | |  | `cast(brsch as fis_brsch preserving type )` |  |  |
| `_Text` | | ✓ | | | | |
| `_IndustryHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CustomerSupplierIndustryText` | [0..*] |
| `_IndustryHierarchyNode` | `I_IndustryHierarchyNode` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIINDUSTRY'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Customer Supplier Industry'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true 
                                     
@ObjectModel: {representativeKey: 'Industry', 
//               sapObjectNodeType.name: 'CustomerSupplierIndustry', // existing API view defines as code list provider
               supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
               modelingPattern: #ANALYTICAL_DIMENSION,
               usageType: {
                            dataClass: #MASTER,
                            serviceQuality: #A,
                            sizeCategory: #S
                           },
               sapObjectNodeType.name: 'CustomerSupplierIndustry'            
              }                                     
                                     
define view I_CustomerSupplierIndustry
  as select from t016
  association [0..*] to I_CustomerSupplierIndustryText as _Text on $projection.Industry = _Text.Industry
  association [0..*] to I_IndustryHierarchyNode        as _IndustryHierarchyNode on $projection.Industry = _IndustryHierarchyNode.Industry
{

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_IndustryHierarchyNode'
  key cast(brsch as fis_brsch preserving type ) as  Industry,
      /* Associations */
      //I_CustomerSupplierIndustryText
      _Text,
      _IndustryHierarchyNode
}
```
