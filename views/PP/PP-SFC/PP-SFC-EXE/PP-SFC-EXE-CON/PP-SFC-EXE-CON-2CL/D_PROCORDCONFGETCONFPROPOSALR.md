---
name: D_PROCORDCONFGETCONFPROPOSALR
description: D Procordconfgetconfproposalr
app_component: PP-SFC-EXE-CON-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - PP-SFC-EXE
  - component:PP-SFC-EXE-CON-2CL
  - lob:Manufacturing
---
# D_PROCORDCONFGETCONFPROPOSALR

**D Procordconfgetconfproposalr**

| Property | Value |
|---|---|
| App Component | `PP-SFC-EXE-CON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConfirmationGroup` | `pph_rueck` |
| `OrderID` | `manufacturingorder` |
| `OrderOperation` | `vdm_vornr` |
| `OrderSuboperation` | `vdm_uvorn` |
| `OrderType` | `manufacturingordertype` |
| `OrderOperationInternalID` | `co_aplzl` |
| `ConfirmationText` | `co_satza` |
| `Language` | `spras` |
| `Material` | `matnr` |
| `OrderPlannedTotalQty` | `ru_gmnga` |
| `ProductionUnit` | `productionunit` |
| `OpenReservationsIsCleared` | `ausor` |
| `IsReversal` | `pph_stzhl` |
| `APIConfHasNoGoodsMovements` | `no_goodsmovement_via_api` |
| `OrderConfirmationRecordType` | `co_satza` |
| `ConfirmationEntryDate` | `ersda` |
| `ConfirmationEntryTime` | `erzet` |
| `EnteredByUser` | `ernam` |
| `LastChangeDate` | `laeda` |
| `LastChangedByUser` | `aenam` |
| `ConfirmationExternalEntryDate` | `ru_exerd` |
| `ConfirmationExternalEntryTime` | `ru_exerz` |
| `EnteredByExternalUser` | `exnam` |
| `ExternalSystemConfirmation` | `ru_extid` |
| `Plant` | `werks_d` |
| `WorkCenterTypeCode` | `pph_objty` |
| `WorkCenter` | `arbpl` |
| `CapacityCategoryCode` | `pph_kapart` |
| `CapacityRequirementSplit` | `pph_split` |
| `ShiftGrouping` | `schgrup` |
| `ShiftDefinition` | `kaptprog` |
| `Personnel` | `pph_pernr` |
| `TimeRecording` | `pph_zausw` |
| `EmployeeWageType` | `pph_loart` |
| `EmployeeWageGroup` | `pph_logrp` |
| `BreakDurationUnit` | `dzeier` |
| `BreakDurationUnitISOCode` | `isocd_unit` |
| `BreakDurationUnitSAPCode` | `meinsint` |
| `ConfirmedBreakDuration` | `iserh` |
| `EmployeeSuitability` | `pph_qualf` |
| `NumberOfEmployees` | `pph_anzms` |
| `PostingDate` | `pph_budat` |
| `ConfirmedExecutionStartDate` | `vdm_isdd` |
| `ConfirmedExecutionStartTime` | `vdm_isdz` |
| `ConfirmedSetupEndDate` | `vdm_ierd` |
| `ConfirmedSetupEndTime` | `vdm_ierz` |
| `ConfirmedProcessingStartDate` | `vdm_isbd` |
| `ConfirmedProcessingStartTime` | `vdm_isbz` |
| `ConfirmedProcessingEndDate` | `vdm_iebd` |
| `ConfirmedProcessingEndTime` | `vdm_iebz` |
| `ConfirmedTeardownStartDate` | `vdm_isad` |
| `ConfirmedTeardownStartTime` | `vdm_isaz` |
| `ConfirmedExecutionEndDate` | `vdm_iedd` |
| `ConfirmedExecutionEndTime` | `vdm_iedz` |
| `ConfirmationUnit` | `meins` |
| `ConfirmationUnitISOCode` | `isocd_unit` |
| `ConfirmationUnitSAPCode` | `meinsint` |
| `ConfirmationYieldQuantity` | `ru_gmnga` |
| `ConfirmationScrapQuantity` | `ru_lmnga` |
| `ConfirmationReworkQuantity` | `ru_xmnga` |
| `VarianceReasonCode` | `pph_agrnd` |
| `OpWorkQuantityUnit1` | `vdm_ile01` |
| `WorkQuantityUnit1ISOCode` | `isocd_unit` |
| `WorkQuantityUnit1SAPCode` | `meinsint` |
| `OpConfirmedWorkQuantity1` | `vdm_ism01` |
| `NoFurtherOpWorkQuantity1IsExpd` | `vdm_lek01` |
| `OpWorkQuantityUnit2` | `vdm_ile02` |
| `WorkQuantityUnit2ISOCode` | `isocd_unit` |
| `WorkQuantityUnit2SAPCode` | `meinsint` |
| `OpConfirmedWorkQuantity2` | `vdm_ism02` |
| `NoFurtherOpWorkQuantity2IsExpd` | `vdm_lek02` |
| `OpWorkQuantityUnit3` | `vdm_ile03` |
| `WorkQuantityUnit3ISOCode` | `isocd_unit` |
| `WorkQuantityUnit3SAPCode` | `meinsint` |
| `OpConfirmedWorkQuantity3` | `vdm_ism03` |
| `NoFurtherOpWorkQuantity3IsExpd` | `vdm_lek03` |
| `OpWorkQuantityUnit4` | `vdm_ile04` |
| `WorkQuantityUnit4ISOCode` | `isocd_unit` |
| `WorkQuantityUnit4SAPCode` | `meinsint` |
| `OpConfirmedWorkQuantity4` | `vdm_ism04` |
| `NoFurtherOpWorkQuantity4IsExpd` | `vdm_lek04` |
| `OpWorkQuantityUnit5` | `vdm_ile05` |
| `WorkQuantityUnit5ISOCode` | `isocd_unit` |
| `WorkQuantityUnit5SAPCode` | `meinsint` |
| `OpConfirmedWorkQuantity5` | `vdm_ism05` |
| `NoFurtherOpWorkQuantity5IsExpd` | `vdm_lek05` |
| `OpWorkQuantityUnit6` | `vdm_ile06` |
| `WorkQuantityUnit6ISOCode` | `isocd_unit` |
| `WorkQuantityUnit6SAPCode` | `meinsint` |
| `OpConfirmedWorkQuantity6` | `vdm_ism06` |
| `NoFurtherOpWorkQuantity6IsExpd` | `vdm_lek06` |
| `BusinessProcessEntryUnit` | `ru_iprze` |
| `BusProcessEntrUnitISOCode` | `isocd_unit` |
| `BusProcessEntryUnitSAPCode` | `meinsint` |
| `BusinessProcessConfirmedQty` | `ru_iprzs` |
| `NoFurtherBusinessProcQtyIsExpd` | `ru_iprzk` |

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@EndUserText.label: 'Get Proposal for Process Order Conf'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
//// Odata CDS A_ProcOrdConfirmation_2 is used as a reference for fields
define abstract entity D_ProcOrdConfGetConfProposalR
{
      
  ConfirmationGroup                  : pph_rueck;
  OrderID                            : manufacturingorder;                                           
  OrderOperation                     : vdm_vornr;
  OrderSuboperation                  : vdm_uvorn; 
  OrderType                          : manufacturingordertype;         
  OrderOperationInternalID           : co_aplzl;
  ConfirmationText                   : co_satza;                                                   
  Language                           : spras;                                                  
  Material                           : matnr;
@Semantics.quantity.unitOfMeasure: 'ConfirmationUnit' 
  OrderPlannedTotalQty               : ru_gmnga;
  ProductionUnit                     : productionunit;       
  OpenReservationsIsCleared          : ausor;          
  IsReversal                         : pph_stzhl;                            
  APIConfHasNoGoodsMovements         : no_goodsmovement_via_api;
  OrderConfirmationRecordType        : co_satza;
  ConfirmationEntryDate              : ersda;                                            
  ConfirmationEntryTime              : erzet;                                            
  EnteredByUser                      : ernam;                                                   
  LastChangeDate                     : laeda;
  LastChangedByUser                  : aenam;                                                    
  ConfirmationExternalEntryDate      : ru_exerd;                                                    
  ConfirmationExternalEntryTime      : ru_exerz;                                                    
  EnteredByExternalUser              : exnam;                                                    
  ExternalSystemConfirmation         : ru_extid;
  Plant                              : werks_d;                                                                
  WorkCenterTypeCode                 : pph_objty;                                               
  WorkCenter                         : arbpl;
  CapacityCategoryCode               : pph_kapart;
  CapacityRequirementSplit           : pph_split;
  ShiftGrouping                      : schgrup; 
  ShiftDefinition                    : kaptprog;        
  Personnel                          : pph_pernr;      // Name 'Personnel' is deprecated but already used in I_ProductionOrdConfirmationTP
  TimeRecording                      : pph_zausw;
  EmployeeWageType                   : pph_loart;
  EmployeeWageGroup                  : pph_logrp;
  BreakDurationUnit                  : dzeier;
  BreakDurationUnitISOCode           : isocd_unit;
  BreakDurationUnitSAPCode           : meinsint;
@Semantics.quantity.unitOfMeasure : 'BreakDurationUnit'
  ConfirmedBreakDuration             : iserh;
  EmployeeSuitability                : pph_qualf;
  NumberOfEmployees                  : pph_anzms;
  PostingDate                        : pph_budat;
  ConfirmedExecutionStartDate        : vdm_isdd;       
  ConfirmedExecutionStartTime        : vdm_isdz;
  ConfirmedSetupEndDate              : vdm_ierd;
  ConfirmedSetupEndTime              : vdm_ierz;
  ConfirmedProcessingStartDate       : vdm_isbd;
  ConfirmedProcessingStartTime       : vdm_isbz;
  ConfirmedProcessingEndDate         : vdm_iebd;
  ConfirmedProcessingEndTime         : vdm_iebz;
  ConfirmedTeardownStartDate         : vdm_isad;
  ConfirmedTeardownStartTime         : vdm_isaz;
  ConfirmedExecutionEndDate          : vdm_iedd;
  ConfirmedExecutionEndTime          : vdm_iedz;
  ConfirmationUnit                   : meins;
  ConfirmationUnitISOCode            : isocd_unit;
  ConfirmationUnitSAPCode            : meinsint;
  @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit' 
  ConfirmationYieldQuantity          : ru_gmnga;
  @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit' 
  ConfirmationScrapQuantity          : ru_lmnga;
  @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit' 
  ConfirmationReworkQuantity         : ru_xmnga;
  VarianceReasonCode                 : pph_agrnd;
  OpWorkQuantityUnit1                : vdm_ile01;
  WorkQuantityUnit1ISOCode           : isocd_unit;
  WorkQuantityUnit1SAPCode           : meinsint;
  @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit1'
  OpConfirmedWorkQuantity1           : vdm_ism01;
  NoFurtherOpWorkQuantity1IsExpd     : vdm_lek01;
  OpWorkQuantityUnit2                : vdm_ile02;  
  WorkQuantityUnit2ISOCode           : isocd_unit; 
  WorkQuantityUnit2SAPCode           : meinsint;   
  @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit2'  
  OpConfirmedWorkQuantity2           : vdm_ism02;  
  NoFurtherOpWorkQuantity2IsExpd     : vdm_lek02;  
  OpWorkQuantityUnit3                : vdm_ile03;  
  WorkQuantityUnit3ISOCode           : isocd_unit; 
  WorkQuantityUnit3SAPCode           : meinsint;   
  @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit3'
  OpConfirmedWorkQuantity3           : vdm_ism03;  
  NoFurtherOpWorkQuantity3IsExpd     : vdm_lek03;  
  OpWorkQuantityUnit4                : vdm_ile04;  
  WorkQuantityUnit4ISOCode           : isocd_unit; 
  WorkQuantityUnit4SAPCode           : meinsint; 
  @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit4'  
  OpConfirmedWorkQuantity4           : vdm_ism04;  
  NoFurtherOpWorkQuantity4IsExpd     : vdm_lek04;  
  OpWorkQuantityUnit5                : vdm_ile05;  
  WorkQuantityUnit5ISOCode           : isocd_unit; 
  WorkQuantityUnit5SAPCode           : meinsint; 
  @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit5'  
  OpConfirmedWorkQuantity5           : vdm_ism05;  
  NoFurtherOpWorkQuantity5IsExpd     : vdm_lek05;  
  OpWorkQuantityUnit6                : vdm_ile06;  
  WorkQuantityUnit6ISOCode           : isocd_unit; 
  WorkQuantityUnit6SAPCode           : meinsint;   
  @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit6'  
  OpConfirmedWorkQuantity6           : vdm_ism06;  
  NoFurtherOpWorkQuantity6IsExpd     : vdm_lek06;  
  BusinessProcessEntryUnit           : ru_iprze;
  BusProcessEntrUnitISOCode          : isocd_unit;
  BusProcessEntryUnitSAPCode         : meinsint;
  @Semantics.quantity.unitOfMeasure: 'BusinessProcessEntryUnit'
  BusinessProcessConfirmedQty        : ru_iprzs;
  NoFurtherBusinessProcQtyIsExpd     : ru_iprzk;
}
```
