---
name: I_SUPPLIERPARTNERFUNC
description: "Supplierpartnerfunc"
app_component: LO-MD-BP-2CL
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
  - LO-MD-BP
  - interface-view
  - supplier
  - partner
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Supplier
---
# I_SUPPLIERPARTNERFUNC

**Supplierpartnerfunc**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` | ✓ | |  | `lifnr` |  |  |
| `PurchasingOrganization` | ✓ | |  | `ekorg` |  |  |
| `SupplierSubrange` | ✓ | |  | `ltsnr` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `PartnerFunction` | ✓ | |  | `parvw` |  |  |
| `PartnerCounter` | ✓ | |  | `parza` |  |  |
| `DefaultPartner` |  | |  | `defpa` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `PartnerFunctionType` |  | |  | `nrart` |  |  |
| `ReferenceSupplier` |  | |  | `case when tpar.nrart = 'LI' then wyt3.lifn2 when tpar.nrart = 'WK' then wyt3.werks when tpar.nrart = 'AP' then wyt3.parnr when tpar.nrart = 'PE' then wyt3.pernr else '' end` |  |  |
| `ContactPerson` |  | |  | `parnr` |  |  |
| `PersonnelNumber` |  | |  | `pernr` |  |  |
| `AuthorizationGroup` |  | | `_SupplierPurchasing` | `AuthorizationGroup` |  |  |
| `_SupplierPurchasing` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_SupplierSubrange` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_SupplierPartnerCounter` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierPurchasing` | `I_SupplierPurchasingOrg` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [0..1] |
| `_SupplierSubrange` | `I_SupplierSubrange` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_SupplierPartnerCounter` | `I_SupplierPartnerCounter` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPLPARTFUNC'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
//@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping:[
                {
                    table: 'WYT3', role: #MAIN,
                    viewElement: ['Supplier','PurchasingOrganization','SupplierSubrange',
                                  'Plant' ,'PartnerFunction','PartnerCounter'],
                    tableElement: ['lifnr','ekorg','ltsnr','werks','parvw','parza']
                },
                {
                    table: 'LFA1', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['Supplier'],
                    tableElement: ['lifnr']
                },
                {
                    table: 'TPAR', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['PartnerFunction'],
                    tableElement: ['parvw']
                } 
                
            ]    
    }
  }
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,  
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE  
@ObjectModel.sapObjectNodeType.name: 'SupplierPartnerFunction'
@ObjectModel.representativeKey:'PartnerFunction'
@AccessControl.privilegedAssociations:  [ '_SupplierPartnerCounter' ] 
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MIXED
@EndUserText.label: 'Supplier Purchasing Partner Function'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
//@VDM.lifecycle.status: #DEPRECATED
//@VDM.lifecycle.successor: 'I_SupplierPartnerFunc_2'

define view I_SupplierPartnerFunc as select from wyt3
inner join tpar on wyt3.parvw = tpar.parvw
association[1..1] to I_SupplierPurchasingOrg as _SupplierPurchasing on $projection.Supplier =  _SupplierPurchasing.Supplier 
                                                                   and $projection.PurchasingOrganization =  _SupplierPurchasing.PurchasingOrganization
association [1..1] to I_Supplier as _Supplier on $projection.Supplier = _Supplier.Supplier
association [0..1] to I_PurchasingOrganization as _PurchasingOrganization on $projection.PurchasingOrganization =  _PurchasingOrganization.PurchasingOrganization         
association [0..1] to I_SupplierSubrange as _SupplierSubrange on  $projection.Supplier = _SupplierSubrange.Supplier
                                                                and  $projection.SupplierSubrange = _SupplierSubrange.SupplierSubrange
association [0..1] to I_Plant as _Plant on $projection.Plant = _Plant.Plant
association [0..1] to I_SupplierPartnerCounter as _SupplierPartnerCounter  on $projection.PartnerCounter = _SupplierPartnerCounter.PartnerCounter                                         
                                                           
 { 
     @ObjectModel.foreignKey.association: '_Supplier'
     key wyt3.lifnr           as  Supplier,
    @ObjectModel.foreignKey.association: '_PurchasingOrganization'         
     key wyt3.ekorg           as  PurchasingOrganization,   
    @ObjectModel.foreignKey.association: '_SupplierSubrange'   
     key wyt3.ltsnr           as  SupplierSubrange, 
     @ObjectModel.foreignKey.association: '_Plant'    
     key wyt3.werks           as  Plant,
     key wyt3.parvw      as  PartnerFunction,     
     @ObjectModel.foreignKey.association: '_SupplierPartnerCounter'
     key wyt3.parza           as  PartnerCounter,
     wyt3.defpa           as  DefaultPartner, 
     wyt3.erdat           as  CreationDate, 
     wyt3.ernam           as  CreatedByUser,      
     //lifn2           as  ReferenceSupplier,
     tpar.nrart                                                      as  PartnerFunctionType,
      case
        when tpar.nrart = 'LI'
          then wyt3.lifn2
        when tpar.nrart = 'WK'
          then wyt3.werks
        when tpar.nrart = 'AP'
          then wyt3.parnr
        when tpar.nrart = 'PE'
          then wyt3.pernr
        else ''
      end as ReferenceSupplier,   
     parnr           as  ContactPerson, 
     pernr           as  PersonnelNumber, 
     _SupplierPurchasing.AuthorizationGroup,
     //_SupplierPurchasing._Supplier.IsBusinessPurposeCompleted,
     /* Associations */
     _SupplierPurchasing, 
     _Supplier,
     _PurchasingOrganization,
     _SupplierSubrange,
     _Plant,
     _SupplierPartnerCounter
          
}
```
