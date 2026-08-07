---
name: I_SUPPLIERCOMPANYVH
description: Suppliercompanyvh
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - value-help
  - supplier
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Supplier
---
# I_SUPPLIERCOMPANYVH

**Suppliercompanyvh**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Supplier` | ✓ | |  |  |
| `CompanyCode` | ✓ | |  |  |
| `Country` |  | | `_Supplier` | `Country` |
| `BPSupplierName` |  | | `_Supplier` | `BPSupplierName` |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` |
| `_Supplier` | | ✓ | | |
| `_CompanyCode` | | ✓ | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPLRCOMPVH'
@EndUserText.label: 'Supplier Company'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #COMPOSITE
@Search.searchable: true
@ObjectModel.semanticKey: ['Supplier', 'CompanyCode']
@ObjectModel.representativeKey: 'Supplier'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]

define view I_SupplierCompanyVH
  as select from I_SupplierCompany
{

      @ObjectModel.text.element: ['BPSupplierName']
      @Search: {
           defaultSearchElement: true,
           ranking: #HIGH,
           fuzzinessThreshold: 0.8
          }
      @UI.textArrangement: #TEXT_LAST
  key Supplier,
      @ObjectModel.text.element: ['CompanyCodeName']
      @UI.textArrangement: #TEXT_LAST
      @Search: {
           defaultSearchElement: true,
           ranking: #MEDIUM,
           fuzzinessThreshold: 0.8
          }
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
      _Supplier,
      _Supplier.Country,
      @Semantics.text: true
      _Supplier.BPSupplierName, 
      @Semantics.text: true
      _CompanyCode.CompanyCodeName,
      _CompanyCode
}
```
