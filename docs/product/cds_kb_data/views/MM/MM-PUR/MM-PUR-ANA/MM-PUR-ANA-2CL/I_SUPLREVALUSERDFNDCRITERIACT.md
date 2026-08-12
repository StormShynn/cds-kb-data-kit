---
name: I_SUPLREVALUSERDFNDCRITERIACT
description: "Suplrevaluserdfndcriteriact"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - interface-view
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLREVALUSERDFNDCRITERIACT

**Suplrevaluserdfndcriteriact**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalUsrDfndCritraUUID` | ✓ | |  | `suplrevalusrdfndcritrauuid` |  |  |
| `Supplier` |  | |  | `supplier` |  |  |
| `MaterialGroup` |  | |  | `materialgroup` |  |  |
| `PurchasingCategory` |  | |  | `purchasingcategory` |  |  |
| `SuplrEvalUserDefinedCriteria` |  | |  | `suplrevaluserdefinedcriteria` |  |  |
| `ValidFrom` |  | |  | `validfrom` |  |  |
| `ValidTo` |  | |  | `validto` |  |  |
| `SuplrEvalUsrDfndCritraRptdDte` |  | |  | `plottingdate` |  |  |
| `TotNmbrOfSuplrUsrDfndCritra` |  | |  | `totnmbrofsuplrusrdfndcritra` |  |  |
| `IsDeleted` |  | |  | `isdeleted` |  |  |
| `Comments` |  | |  | `comments` |  |  |
| `SuplrEvalUsrDfndCritraCrtedBy` |  | |  | `suplrevalusrdfndcritracrtedby` |  |  |
| `SuplrEvalUserDfndCritraCrtnDte` |  | |  | `suplrevaluserdfndcritracrtndte` |  |  |
| `SuplrEvalUsrDfndCritraChgdBy` |  | |  | `suplrevalusrdfndcritrachgdby` |  |  |
| `SuplrEvalUserDfndCritraChgDate` |  | |  | `suplrevaluserdfndcritrachgdate` |  |  |
| `SupplierAccountGroup` |  | |  | `supplieraccountgroup` |  |  |
| `SuplrEvalUsrCritraChgDteTme` |  | |  | `suplrevalusrdfndcritraentchgd` |  |  |
| `_UserDefCriteria` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UserDefCriteria` | `I_SuplrEvalUserDefinedCriteria` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_MaterialGroup` | `I_ProductGroup_2` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@AbapCatalog.sqlViewName: 'ISUPUSRDEFCRTCT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.preserveKey: true
@VDM.viewType: #BASIC
@ObjectModel: {
  //modelCategory: #BUSINESS_OBJECT,
  compositionRoot:true,
  semanticKey: [ 'Supplier', 'MaterialGroup', 'PurchasingCategory', 'SuplrEvalUserDefinedCriteria', 'ValidFrom' ],
  representativeKey: ['SuplrEvalUsrDfndCritraUUID' ]
}
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory:  #M
@EndUserText.label: 'User Defined Criteria Count'
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [  #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_SuplrEvalUserDfndCriteriaCt
  as select from mmpur_ana_crtscr

  association [1..1] to I_SuplrEvalUserDefinedCriteria as _UserDefCriteria on _UserDefCriteria.SuplrEvalUserDefinedCriteria = $projection.SuplrEvalUserDefinedCriteria
  association [1..1] to I_Supplier                     as _Supplier        on _Supplier.Supplier = $projection.Supplier
  association [1..1] to I_ProductGroup_2                as _MaterialGroup   on _MaterialGroup.ProductGroup = $projection.MaterialGroup

{

      //MMPUR_ANA_CRTSCR
  key suplrevalusrdfndcritrauuid     as  SuplrEvalUsrDfndCritraUUID,
      supplier                       as  Supplier,
      materialgroup                  as  MaterialGroup,
      purchasingcategory             as  PurchasingCategory,
      suplrevaluserdefinedcriteria   as  SuplrEvalUserDefinedCriteria,
      validfrom                      as  ValidFrom,
      validto                        as  ValidTo,
      plottingdate                   as  SuplrEvalUsrDfndCritraRptdDte,
      totnmbrofsuplrusrdfndcritra    as  TotNmbrOfSuplrUsrDfndCritra,
      @Semantics.booleanIndicator: true
      isdeleted                      as  IsDeleted,
      comments                       as  Comments,
      suplrevalusrdfndcritracrtedby  as  SuplrEvalUsrDfndCritraCrtedBy,
      suplrevaluserdfndcritracrtndte   as  SuplrEvalUserDfndCritraCrtnDte,
      suplrevalusrdfndcritrachgdby  as  SuplrEvalUsrDfndCritraChgdBy,
      suplrevaluserdfndcritrachgdate     as  SuplrEvalUserDfndCritraChgDate,
      supplieraccountgroup            as SupplierAccountGroup,  
       @Semantics.systemDateTime.lastChangedAt: true
      suplrevalusrdfndcritraentchgd as SuplrEvalUsrCritraChgDteTme,   
 
      _UserDefCriteria,
      _Supplier,
      _MaterialGroup

}
where
  iseopblocked = ''
```
